import emailjs from "@emailjs/browser";

export const sendContactEmail = async (formData, setLoading) => {
  const { name, email, message } = formData;

  if (!name || !email || !message) {
    return { success: false, message: "❌ Please fill all fields.", color: "#ff4d4d" };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { success: false, message: "❌ Please enter a valid email address.", color: "#ff4d4d" };
  }

  setLoading(true);

  try {
    await emailjs.send(
      "service_0859uui", // Service ID
      "template_ch14nia", // Template ID
      {
        from_name: name,
        reply_to: email,
        message: message
      },
      "EsWrBOSm9pZoZOb6g" // Public Key
    );
    return { success: true, message: `✅ Thanks ${name}, your message has been sent!`, color: "#4ade80" };
  } catch (err) {
    console.error("EmailJS error:", err);
    return { success: false, message: "❌ Something went wrong. Please try again.", color: "#ff4d4d" };
  } finally {
    setLoading(false);
  }
};
