import { useRef, useState } from "react";
import { Brain } from "lucide-react";

export default function OtpVerification({ onBack }: { onBack?: () => void }) {
    const [otpDigits, setOtpDigits] = useState<string[]>(Array(6).fill(""));
    const [error, setError] = useState("");
    const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

    const handleChange = (index: number, value: string) => {
        if (/^\d?$/.test(value)) {
        const newOtp = [...otpDigits];
        newOtp[index] = value;
        setOtpDigits(newOtp);

        if (value && index < 5) {
            inputsRef.current[index + 1]?.focus();
        }
        if (!value && index > 0) {
            inputsRef.current[index - 1]?.focus();
        }
        setError("");
        }
    };

    const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
        const pasteData = e.clipboardData.getData("Text").slice(0, 6);
        if (/^\d{4,6}$/.test(pasteData)) {
        const digits = pasteData.split("");
        const newOtp = [...otpDigits];
        digits.forEach((digit, idx) => {
            if (idx < 6) newOtp[idx] = digit;
        });
        setOtpDigits(newOtp);
        setTimeout(() => {
            inputsRef.current[digits.length - 1]?.focus();
        }, 10);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const otp = otpDigits.join("");
        if (otp.length !== 6) {
        setError("Please enter all 6 digits");
        return;
        }

    console.log("Submitted OTP:", otp);
    // TODO: validate OTP with backend here
    };

    const handleResend = () => {
        console.log("Resend OTP triggered");
        // TODO: implement resend API
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4 font-montserrat">
            <div className="max-w-md w-full">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-2xl">
                    <div className="text-center mb-8">
                        <div className="flex items-center justify-center mb-4">
                            <div className="p-2 bg-purple-600 rounded-xl mr-3">
                                <Brain className="w-6 h-6 text-white" />
                            </div>
                            <h2 className="text-2xl font-bold text-white">Verify OTP</h2>
                        </div>
                        <p className="text-gray-300">Enter the 6-digit code sent to your email address.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-6 gap-2 sm:gap-3">
                            {otpDigits.map((digit, index) => (
                                <input
                                    key={index}
                                    ref={(el) => { if (el) inputsRef.current[index] = el; }}
                                    type="text"
                                    inputMode="numeric"
                                    maxLength={1}
                                    value={digit}
                                    onChange={(e) => handleChange(index, e.target.value)}
                                    onPaste={handlePaste}
                                    className="w-12 h-12 text-center text-white text-lg font-semibold bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                                />
                            ))}
                        </div>
                        {error && <p className="text-sm text-red-500 text-center">{error}</p>}

                        <button
                            type="submit"
                            className="w-full py-3 bg-purple-600 text-white rounded-xl font-semibold hover:bg-purple-700 transition-colors"
                        >
                            Verify OTP
                        </button>

                        <p className="text-center text-sm text-gray-300">
                            Didn’t receive the code?{" "}
                            <button
                                type="button"
                                onClick={handleResend}
                                className="text-purple-400 hover:text-purple-300 font-semibold"
                            >
                                Resend OTP
                            </button>
                        </p>

                        {onBack && (
                        <button
                            type="button"
                            onClick={onBack}
                            className="mt-6 text-sm text-gray-400 hover:text-white transition-colors"
                        >
                            ← Back
                        </button>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
}
