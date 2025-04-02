"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { ChevronLeft, User, Mail, Check, RefreshCw } from "lucide-react"
import AnimatedBackground from "@/components/animated-background"
import CopyButton from "@/components/copy-button"
import { Link } from "react-router-dom"
import axios from "axios"

export default function PurchasePage() {
  const searchParams = new URLSearchParams(window.location.search)
  const rank = searchParams.get("rank") || "Unknown Rank"
  const price = searchParams.get("price") || "0.00"

  const [step, setStep] = useState<"info-payment" | "confirmation">("info-payment")
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    discordTag: "",
    rank: rank,
    price: price,
  })
  const [isLoading, setIsLoading] = useState(false)
  const [transactionId, setTransactionId] = useState("")
  const [paymentProof, setPaymentProof] = useState<File | null>(null)
  const [paymentProofPreview, setPaymentProofPreview] = useState<string | null>(null)
  const [formStatus, setFormStatus] = useState<{
    submitting: boolean;
    error: string | null;
    success: boolean;
  }>({
    submitting: false,
    error: null,
    success: false,
  })

  useEffect(() => {
    const randomId = Math.random().toString(36).substring(2, 10).toUpperCase()
    setTransactionId(`BN-${randomId}`)
    setFormData(prev => ({
      ...prev,
      transactionId: `BN-${randomId}`,
      rank: rank,
      price: price
    }))
  }, [rank, price])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      setPaymentProof(file)
      const reader = new FileReader()
      reader.onloadend = () => {
        setPaymentProofPreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!paymentProof) {
      setFormStatus({
        submitting: false,
        error: "Please upload a proof of payment image.",
        success: false,
      })
      return
    }

    setIsLoading(true)
    setFormStatus({ submitting: true, error: null, success: false })

    try {
      // Upload image to Cloudinary
      const uploadFormData = new FormData()
      uploadFormData.append("file", paymentProof)
      uploadFormData.append("upload_preset", "ml_default")

      const cloudinaryResponse = await axios.post(
        "https://api.cloudinary.com/v1_1/dhsqmvg8v/image/upload",
        uploadFormData
      )

      if (!cloudinaryResponse.data.secure_url) {
        throw new Error("Upload failed: No secure URL returned")
      }

      const imageUrl = cloudinaryResponse.data.secure_url

      // Submit form with image URL
      const formDataWithImage = {
        ...formData,
        paymentProofUrl: imageUrl,
      }

      const response = await fetch("https://formspree.io/f/mzzejzjn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formDataWithImage),
      })

      if (!response.ok) {
        throw new Error(`Form submission failed with status: ${response.status}`)
      }

      setFormStatus({ submitting: false, error: null, success: true })
      setStep("confirmation")
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : "An error occurred"
      setFormStatus({
        submitting: false,
        error: errorMessage,
        success: false,
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-stone-900 text-stone-100">
      <AnimatedBackground />
      <main className="relative z-10 px-4 py-16 pt-16">
        <div className="mx-auto max-w-2xl">
          <div className="mb-8 flex items-center">
            <Link to="/store" className="group flex items-center text-bone-300 transition-colors hover:text-bone-100">
              <ChevronLeft className="mr-1 h-5 w-5 transition-transform group-hover:-translate-x-1" />
              Back to Store
            </Link>
          </div>

          <div className="mb-8 text-center">
            <h1 className="mb-2 font-minecraft text-3xl text-bone-100 md:text-4xl">PURCHASE {rank}</h1>
            <p className="text-lg text-bone-200">Complete your purchase to unlock exclusive perks</p>
          </div>

          {/* Progress Steps */}
          <div className="mb-8">
            <div className="flex items-center justify-center">
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-full ${step === "info-payment" ? "bg-emerald-500 text-white" : "bg-emerald-700 text-white"}`}
              >
                1
              </div>
              <div className={`h-1 w-16 ${step === "confirmation" ? "bg-emerald-700" : "bg-stone-700"}`}></div>
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-full ${step === "confirmation" ? "bg-emerald-500 text-white" : "bg-stone-700 text-bone-300"}`}
              >
                2
              </div>
            </div>
            <div className="mt-2 flex justify-center">
              <div className="flex w-full max-w-md justify-between px-4 text-sm">
                <span className={step === "info-payment" ? "text-emerald-400" : "text-bone-300"}>Information & Payment</span>
                <span className={step === "confirmation" ? "text-emerald-400" : "text-bone-300"}>Confirmation</span>
              </div>
            </div>
          </div>

          {/* Error message */}
          {formStatus.error && (
            <div className="mb-4 rounded-md bg-red-900/30 p-4 text-red-200">
              <p>{formStatus.error}</p>
            </div>
          )}

          {/* Info & Payment Step */}
          {step === "info-payment" && (
            <div className="rounded-lg bg-black/40 p-6 backdrop-blur-sm">
              <form onSubmit={handleSubmit}>
                {/* User Information */}
                <div className="mb-6">
                  <div className="mb-4">
                    <label htmlFor="username" className="mb-2 block font-minecraft text-bone-100">
                      Minecraft Username
                    </label>
                    <div className="flex items-center rounded-md border border-stone-700 bg-stone-800 px-3 py-2">
                      <User className="mr-2 h-5 w-5 text-stone-500" />
                      <input
                        type="text"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-transparent text-bone-100 outline-none placeholder:text-stone-500"
                        placeholder="Your Minecraft username"
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label htmlFor="email" className="mb-2 block font-minecraft text-bone-100">
                      Email Address
                    </label>
                    <div className="flex items-center rounded-md border border-stone-700 bg-stone-800 px-3 py-2">
                      <Mail className="mr-2 h-5 w-5 text-stone-500" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-transparent text-bone-100 outline-none placeholder:text-stone-500"
                        placeholder="Your email address"
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label htmlFor="discordTag" className="mb-2 block font-minecraft text-bone-100">
                      Discord Username (Optional)
                    </label>
                    <div className="flex items-center rounded-md border border-stone-700 bg-stone-800 px-3 py-2">
                      <svg className="mr-2 h-5 w-5 text-stone-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
                      </svg>
                      <input
                        type="text"
                        id="discordTag"
                        name="discordTag"
                        value={formData.discordTag}
                        onChange={handleInputChange}
                        className="w-full bg-transparent text-bone-100 outline-none placeholder:text-stone-500"
                        placeholder="Your Discord username"
                      />
                    </div>
                  </div>
                </div>

                {/* Payment Information */}
                <div className="mb-6">
                  <h2 className="mb-4 font-minecraft text-xl text-bone-100">Payment Details</h2>
                  <div className="mb-4 rounded-md bg-stone-800/80 p-4">
                    <div className="mb-2 flex justify-between">
                      <span className="font-minecraft text-bone-100">Transaction ID</span>
                      <div className="flex items-center">
                        <span className="mr-2 font-minecraft text-emerald-400">{transactionId}</span>
                        <CopyButton textToCopy={transactionId} />
                      </div>
                    </div>
                    <div className="mb-2 flex justify-between">
                      <span className="font-minecraft text-bone-100">Amount</span>
                      <span className="font-minecraft text-emerald-400">${price}</span>
                    </div>
                    <div className="mb-2 flex justify-between">
                      <span className="font-minecraft text-bone-100">Bank Account</span>
                      <div className="flex items-center">
                        <span className="mr-2 text-bone-100">500 036 264</span>
                        <CopyButton textToCopy="500 036 264" />
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-minecraft text-bone-100">Account Name</span>
                      <span className="text-bone-100">KEO VUTHTHANA</span>
                    </div>
                  </div>

                  <div className="mb-4 flex justify-center">
                    <div className="rounded-lg bg-white p-4">
                      <img src="https://media.discordapp.net/attachments/560806550315204609/1356919910340628533/aba_mobile_1743585233369.png?ex=67ee51a4&is=67ed0024&hm=09b862d3ab3908adbaefc34de6b2c339e326b2cf1fb9eb4ad54af869eaa02678&=&format=webp&quality=lossless&width=1104&height=886"/>
                    </div>
                  </div>

                  {/* Payment Proof Upload */}
                  <div className="mb-4">
                    <label htmlFor="paymentProof" className="mb-2 block font-minecraft text-bone-100">
                      Upload Payment Proof
                    </label>
                    <div className={`flex flex-col items-center justify-center rounded-md border-2 border-dashed ${paymentProofPreview ? 'border-emerald-500' : 'border-stone-700'} p-6`}>
                      {paymentProofPreview ? (
                        <div className="w-full">
                          <div className="mb-4 flex justify-center">
                            <img 
                              src={paymentProofPreview} 
                              alt="Payment proof preview" 
                              className="max-h-48 rounded-md object-contain" 
                            />
                          </div>
                          <button
                            type="button"
                            onClick={() => {
                              setPaymentProof(null)
                              setPaymentProofPreview(null)
                            }}
                            className="rounded-md bg-stone-700 px-4 py-2 text-bone-100 hover:bg-stone-600"
                          >
                            Remove Image
                          </button>
                        </div>
                      ) : (
                        <div className="text-center">
                          <p className="mb-2 text-bone-200">Upload a screenshot of your payment</p>
                          <p className="text-sm text-bone-300">JPG, JPEG & PNG to 5MB</p>
                          <label className="mt-4 inline-block cursor-pointer rounded-md bg-stone-700 px-4 py-2 text-bone-100 hover:bg-stone-600">
                            Select File
                            <input
                              type="file"
                              id="paymentProof"
                              name="attachment"
                              accept="image/png, image/jpeg, image/jpg"
                              onChange={handleFileChange}
                              className="hidden"
                            />
                          </label>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <input type="hidden" name="rank" value={rank} />
                <input type="hidden" name="price" value={price} />
                <input type="hidden" name="transactionId" value={transactionId} />

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full rounded-md bg-emerald-600 py-3 font-minecraft text-white hover:bg-emerald-500 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center">
                      <RefreshCw className="mr-2 h-5 w-5 animate-spin" />
                      Processing...
                    </span>
                  ) : (
                    "Confirm Purchase"
                  )}
                </button>
              </form>
            </div>
          )}

          {/* Confirmation Step (unchanged) */}
          {step === "confirmation" && (
            <div className="rounded-lg bg-black/40 p-6 text-center backdrop-blur-sm">
              <div className="mb-6 flex justify-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-600">
                  <Check className="h-10 w-10 text-white" />
                </div>
              </div>

              <h2 className="mb-2 font-minecraft text-2xl text-bone-100">Purchase Successful!</h2>
              <p className="mb-6 text-bone-200">
                Thank you for your purchase. Your {rank} has been activated on your account.
              </p>

              <div className="mb-6 rounded-md bg-stone-800/80 p-4 text-left">
                <div className="mb-2">
                  <span className="font-minecraft text-bone-100">Transaction Details</span>
                </div>
                <div className="mb-2 flex justify-between text-sm">
                  <span className="text-bone-300">Transaction ID</span>
                  <span className="text-bone-100">{transactionId}</span>
                </div>
                <div className="mb-2 flex justify-between text-sm">
                  <span className="text-bone-300">Date</span>
                  <span className="text-bone-100">{new Date().toLocaleDateString()}</span>
                </div>
                <div className="mb-2 flex justify-between text-sm">
                  <span className="text-bone-300">Item</span>
                  <span className="text-bone-100">{rank}</span>
                </div>
                <div className="mb-2 flex justify-between text-sm">
                  <span className="text-bone-300">Amount</span>
                  <span className="text-emerald-400">${price}</span>
                </div>
                <div className="mb-2 flex justify-between text-sm">
                  <span className="text-bone-300">Status</span>
                  <span className="text-yellow-400">Verifying</span>
                </div>
              </div>

              <div className="mb-6 rounded-md bg-yellow-400/30 p-4">
                <p className="text-sm text-yellow-200">
                  Your rank benefits are currently being verified. The expected waiting time is between 5 to 30 minutes. 
                  If the waiting time exceeds this period, 
                  please reach out to our staff via our Discord channel with your Transaction ID for assistance.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  to="/"
                  className="flex-1 rounded-md bg-emerald-600 py-3 font-minecraft text-white hover:bg-emerald-500"
                >
                  Return to Home
                </Link>
                <Link
                  to="/store"
                  className="flex-1 rounded-md bg-stone-700 py-3 font-minecraft text-white hover:bg-stone-600"
                >
                  Back to Store
                </Link>
              </div>
            </div>
          )}
        </div>
      </main>

      <footer className="relative z-10 bg-black/60 px-4 py-6 text-center backdrop-blur-sm">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm text-bone-400">
            © {new Date().getFullYear()} Bone Network. Not affiliated with Mojang AB.
          </p>
        </div>
      </footer>
    </div>
  )
}