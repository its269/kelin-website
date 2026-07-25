import InquiryReplyClient from "./InquiryReplyClient";

export const metadata = {
  title: "Continue Inquiry Conversation",
  robots: { index: false, follow: false },
};

export default function InquiryReplyPage() {
  return <InquiryReplyClient />;
}
