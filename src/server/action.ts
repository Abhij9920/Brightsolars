"use server";
import { FormData, QuoteFormData } from "@/lib/types";
import nodemailer from "nodemailer";


export const sendEmail = async (formData: FormData) => {
    const { name, email, message } = formData;

    try {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.SMPT_USERNAME!,
            pass: process.env.SMPT_PASSWORD!,
        }
    });
     
    const mailOptions = {
        from: email,
        to: process.env.MAIL_RECEIVER_ADDRESS!,
        subject: "Brightsolars — Contact Form",
        text: ` Message from ${name} with this email (${email}) \n\n ${message}`,
        html: ""
    };
    // send mail with defined transport object
    await transporter.sendMail(mailOptions);
    return {
        success: true,
        message: "Email sent successfully",
        error: null,
      };
      
    } catch (error) {
      console.log(error);
      return {
        success: false,
        message: "Email not sent",
        error: error,
      };
    }
    
};

export const sendQuoteRequest = async (formData: QuoteFormData) => {
    const { name, email, phone, postcode, state, propertyType, roofType, billRange, systemInterest, timeframe, message } = formData;

    try {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.SMPT_USERNAME!,
            pass: process.env.SMPT_PASSWORD!,
        }
      });

      const emailBody = `
New Quote Request from Brightsolars Website

--- Customer Details ---
Name: ${name}
Email: ${email}
Phone: ${phone}
Postcode: ${postcode}
State: ${state}

--- Property Details ---
Property Type: ${propertyType}
Roof Type: ${roofType}
Quarterly Bill: ${billRange}

--- System Interest ---
Interested In: ${systemInterest}
Timeframe: ${timeframe}

--- Additional Notes ---
${message || "None"}
      `.trim();

      const mailOptions = {
          from: email,
          to: process.env.MAIL_RECEIVER_ADDRESS!,
          subject: `Brightsolars — New Quote Request from ${name}`,
          text: emailBody,
          html: ""
      };

      await transporter.sendMail(mailOptions);
      return {
          success: true,
          message: "Quote request sent successfully! We'll be in touch within 24 hours.",
          error: null,
        };
        
    } catch (error) {
      console.log(error);
      return {
        success: false,
        message: "Failed to send quote request. Please try again or call us directly.",
        error: error,
      };
    }
};