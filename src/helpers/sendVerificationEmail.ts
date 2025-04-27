import { resend } from "@/lib/resend";
import VerificationEmail from "../../email/VerificationEmail";
import { ApiResponse } from "@/types/ApiResponse";

export async function sendVerificationEmail(
    email: string,
    username: string,
    verifyCode: string
): Promise<ApiResponse> {

    try {

        await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: ['delivered@resend.dev'],
            subject: 'Anonymous_Msg - Verification Code',
            react: VerificationEmail({ username, otp: verifyCode }),
        });

        return {
            success: false,
            message: "Verification Email sent successfully"
        }

    } catch (error) {
        console.log("Error Sending Verification Email", error);

        return {
            success: false,
            message: "Sending verification email failed"
        }
    }
}