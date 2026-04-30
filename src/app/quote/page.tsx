"use client";

import { useState } from "react";
import { QUOTE_STEPS, QUOTE_FIELDS } from "@/lib/content";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { sendQuoteRequest } from "@/server/action";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowRight, ArrowLeft, Loader2 } from "lucide-react";

const QuotePage = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    propertyType: "",
    roofType: "",
    billRange: "",
    systemInterest: "",
    timeframe: "",
    name: "",
    email: "",
    phone: "",
    postcode: "",
    state: "",
    message: "",
  });

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const canProceed = () => {
    switch (currentStep) {
      case 0:
        return formData.propertyType && formData.roofType;
      case 1:
        return formData.billRange && formData.timeframe;
      case 2:
        return formData.systemInterest;
      case 3:
        return formData.name && formData.email && formData.phone && formData.postcode && formData.state;
      default:
        return false;
    }
  };

  const handleSubmit = async () => {
    if (!canProceed()) return;
    setIsSubmitting(true);
    try {
      const response = await sendQuoteRequest(formData);
      if (response.success) {
        toast.success(response.message);
        setIsSubmitted(true);
      } else {
        toast.error(response.message);
      }
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const OptionButton = ({
    label,
    selected,
    onClick,
  }: {
    label: string;
    selected: boolean;
    onClick: () => void;
  }) => (
    <button
      type="button"
      onClick={onClick}
      className={`w-full text-left px-4 py-3 md:px-5 md:py-4 rounded-xl border-2 transition-all duration-300 font-medium text-sm md:text-base ${
        selected
          ? "border-[#32C36C] bg-green-50 text-[#32C36C]"
          : "border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:bg-slate-50"
      }`}
    >
      <div className="flex items-center justify-between">
        {label}
        {selected && <Check className="w-5 h-5 text-[#32C36C]" />}
      </div>
    </button>
  );

  if (isSubmitted) {
    return (
      <div className="overflow-x-hidden">
        <div className="min-h-screen flex items-center justify-center px-4 pt-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center max-w-lg mx-auto"
          >
            <div className="w-20 h-20 bg-[#32C36C] rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-black mb-3">
              Quote Request Sent!
            </h1>
            <p className="text-slate-500 mb-8">
              Thank you for your interest. Our team will review your requirements and get back to you within 24 hours with a personalised quote.
            </p>
            <Button
              size="lg"
              className="bg-[#32C36C] hover:bg-[#2B9A5A] rounded-full"
              onClick={() => {
                setIsSubmitted(false);
                setCurrentStep(0);
                setFormData({
                  propertyType: "",
                  roofType: "",
                  billRange: "",
                  systemInterest: "",
                  timeframe: "",
                  name: "",
                  email: "",
                  phone: "",
                  postcode: "",
                  state: "",
                  message: "",
                });
              }}
            >
              Submit Another Quote
            </Button>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-x-hidden">
      <div className="min-h-screen pt-24 md:pt-28 pb-10 px-4 font-sans bg-slate-50">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-2xl md:text-4xl font-bold text-black mb-2">
              Get a Free Solar Quote
            </h1>
            <p className="text-slate-500 text-sm md:text-base">
              Tell us about your property and energy needs — it only takes 2 minutes.
            </p>
          </div>

          {/* Step Progress */}
          <div className="flex items-center justify-between mb-10 max-w-md mx-auto">
            {QUOTE_STEPS.map((step, index) => (
              <div key={step.step} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${
                      index < currentStep
                        ? "bg-[#32C36C] text-white"
                        : index === currentStep
                        ? "bg-[#32C36C] text-white ring-4 ring-green-100"
                        : "bg-slate-200 text-slate-400"
                    }`}
                  >
                    {index < currentStep ? (
                      <Check className="w-5 h-5" />
                    ) : (
                      step.step
                    )}
                  </div>
                  <span className="text-xs text-slate-400 mt-1 hidden md:block">
                    {step.title}
                  </span>
                </div>
                {index < QUOTE_STEPS.length - 1 && (
                  <div
                    className={`w-12 md:w-20 h-1 mx-1 md:mx-2 rounded-full transition-all duration-300 ${
                      index < currentStep ? "bg-[#32C36C]" : "bg-slate-200"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Step Title */}
          <div className="text-center mb-6">
            <h2 className="text-xl md:text-2xl font-bold text-black">
              {QUOTE_STEPS[currentStep].title}
            </h2>
            <p className="text-slate-400 text-sm">
              {QUOTE_STEPS[currentStep].description}
            </p>
          </div>

          {/* Step Content */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 md:p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                {/* Step 1: Property Type */}
                {currentStep === 0 && (
                  <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-3">
                      <label className="text-sm font-semibold text-black">
                        What type of property is this for?
                      </label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {QUOTE_FIELDS.propertyTypes.map((type) => (
                          <OptionButton
                            key={type}
                            label={type}
                            selected={formData.propertyType === type}
                            onClick={() => updateField("propertyType", type)}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-col gap-3">
                      <label className="text-sm font-semibold text-black">
                        What type of roof do you have?
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        {QUOTE_FIELDS.roofTypes.map((type) => (
                          <OptionButton
                            key={type}
                            label={type}
                            selected={formData.roofType === type}
                            onClick={() => updateField("roofType", type)}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 2: Energy Needs */}
                {currentStep === 1 && (
                  <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-3">
                      <label className="text-sm font-semibold text-black">
                        What is your average quarterly electricity bill?
                      </label>
                      <div className="flex flex-col gap-3">
                        {QUOTE_FIELDS.billRanges.map((range) => (
                          <OptionButton
                            key={range}
                            label={range}
                            selected={formData.billRange === range}
                            onClick={() => updateField("billRange", range)}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-col gap-3">
                      <label className="text-sm font-semibold text-black">
                        When are you looking to install?
                      </label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {QUOTE_FIELDS.timeframes.map((tf) => (
                          <OptionButton
                            key={tf}
                            label={tf}
                            selected={formData.timeframe === tf}
                            onClick={() => updateField("timeframe", tf)}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 3: Products */}
                {currentStep === 2 && (
                  <div className="flex flex-col gap-3">
                    <label className="text-sm font-semibold text-black">
                      What are you interested in?
                    </label>
                    <div className="flex flex-col gap-3">
                      {QUOTE_FIELDS.systemInterests.map((interest) => (
                        <OptionButton
                          key={interest}
                          label={interest}
                          selected={formData.systemInterest === interest}
                          onClick={() =>
                            updateField("systemInterest", interest)
                          }
                        />
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 4: Your Details */}
                {currentStep === 3 && (
                  <div className="flex flex-col gap-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-2">
                        <label className="text-sm font-semibold text-black">
                          Full Name *
                        </label>
                        <Input
                          placeholder="Your full name"
                          value={formData.name}
                          onChange={(e) => updateField("name", e.target.value)}
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-sm font-semibold text-black">
                          Email *
                        </label>
                        <Input
                          type="email"
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={(e) => updateField("email", e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-2">
                        <label className="text-sm font-semibold text-black">
                          Phone *
                        </label>
                        <Input
                          type="tel"
                          placeholder="04XX XXX XXX"
                          value={formData.phone}
                          onChange={(e) => updateField("phone", e.target.value)}
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col gap-2">
                          <label className="text-sm font-semibold text-black">
                            Postcode *
                          </label>
                          <Input
                            placeholder="3000"
                            value={formData.postcode}
                            onChange={(e) =>
                              updateField("postcode", e.target.value)
                            }
                          />
                        </div>
                        <div className="flex flex-col gap-2">
                          <label className="text-sm font-semibold text-black">
                            State *
                          </label>
                          <select
                            value={formData.state}
                            onChange={(e) =>
                              updateField("state", e.target.value)
                            }
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                          >
                            <option value="">Select</option>
                            {QUOTE_FIELDS.states.map((s) => (
                              <option key={s} value={s}>
                                {s}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-semibold text-black">
                        Additional Notes (Optional)
                      </label>
                      <Textarea
                        placeholder="Anything else you'd like us to know..."
                        value={formData.message}
                        onChange={(e) => updateField("message", e.target.value)}
                        rows={3}
                      />
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex justify-between mt-8">
              <Button
                variant="outline"
                onClick={() => setCurrentStep((s) => s - 1)}
                disabled={currentStep === 0}
                className="gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </Button>

              {currentStep < QUOTE_STEPS.length - 1 ? (
                <Button
                  onClick={() => setCurrentStep((s) => s + 1)}
                  disabled={!canProceed()}
                  className="bg-[#32C36C] hover:bg-[#2B9A5A] gap-2"
                >
                  Next
                  <ArrowRight className="w-4 h-4" />
                </Button>
              ) : (
                <Button
                  onClick={handleSubmit}
                  disabled={!canProceed() || isSubmitting}
                  className="bg-[#32C36C] hover:bg-[#2B9A5A] gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Submit Quote Request"
                  )}
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuotePage;
