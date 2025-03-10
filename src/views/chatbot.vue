<template>
  <section
    class="relative text-center py-24 text-sekunder font-primary bg-cover bg-center lg:min-h-[50vh]"
    style="
      background-image: url('/image/hero.png');
      background-size: cover;
      background-position: center;
    "
  >
    <div class="absolute inset-0 bg-black bg-opacity-70"></div>
    <div class="relative z-10">
      <h1 class="font-sekunder text-4xl my-5">Chat Bot</h1>
      <p>
        Selamat datang! Ingin tahu lebih banyak tentang
        <br class="hidden md:inline" />
        batik ramah lingkungan dan cara mendukung keberlanjutan?
        <br class="hidden md:inline" />
        Tanyakan apa saja!
      </p>
    </div>
  </section>

  <div class="flex flex-col h-screen w-full p-4 md:p-10 container mx-auto">
    <div
      class="flex-1 overflow-auto p-4 border-2 border-primary rounded-lg space-y-4"
    >
      <div
        v-for="(message, index) in messages"
        :key="index"
        class=""
        :class="{ 'justify-end': message.sender === 'user' }"
      >
        <div
          v-if="message.sender === 'user'"
          class="flex items-end justify-end space-x-3"
        >
          <div
            class="p-4 rounded-lg bg-[#B89158] text-white max-w-[75%] break-words"
          >
            <p class="text-justify">{{ message.text }}</p>
          </div>
          <div
            class="w-10 h-10 rounded-full overflow-hidden border bg-[#D9D9D9] flex justify-center items-center"
          >
            <img
              class="w-10 h-10 object-contain"
              src="/image/icon/person-icon.png"
              alt="User Icon"
            />
          </div>
        </div>
        <div v-else class="flex items-end space-x-3">
          <div
            class="w-10 h-10 rounded-full overflow-hidden border bg-[#D9D9D9] flex justify-center items-center"
          >
            <img
              class="w-10 h-10 object-contain"
              src="/image/logo/logo 4.png"
              alt="Sundara Logo"
            />
          </div>
          <div
            class="p-4 rounded-lg bg-primary text-white max-w-[75%] break-words"
          >
            <p class="text-justify">{{ message.text }}</p>
          </div>
        </div>
      </div>
      <div v-if="isLoading" class="flex items-center space-x-3">
        <div
          class="w-10 h-10 rounded-full overflow-hidden border bg-[#D9D9D9] flex justify-center items-center"
        >
          <img
            class="w-10 h-10 object-contain"
            src="/image/logo/logo 4.png"
            alt="Sundara Logo"
          />
        </div>
        <div class="p-3 rounded-full border bg-primary flex space-x-1">
          <span class="dot w-2 h-2 bg-white rounded-full animate-bounce"></span>
          <span
            class="dot w-2 h-2 bg-white rounded-full animate-bounce delay-150"
          ></span>
          <span
            class="dot w-2 h-2 bg-white rounded-full animate-bounce delay-300"
          ></span>
        </div>
      </div>
    </div>
    <div class="py-2 px-4">
      <div class="flex items-center space-x-2">
        <input
          v-model="userInput"
          @keyup.enter="sendMessage"
          class="flex-1 h-10 px-3 border-2 border-primary rounded-lg outline-none focus:ring-offset-1 focus:ring-primary-offset-1 text-sm md:text-base"
          placeholder="Tulis pesan..."
        />
        <button class="p-2" @click="sendMessage">
          <img class="w-6" src="/image/icon/send-icon.png" alt="Send" />
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { GoogleGenerativeAI } from "https://cdn.jsdelivr.net/npm/@google/generative-ai/+esm";

export default {
  name: "Chatbot",
  mounted() {
    window.scrollTo(0, 0);
  },
  data() {
    return {
      userInput: "",
      isLoading: false,
      messages: [
        {
          text: "Halo! Saya ALOPE chatbot, ada yang bisa saya bantu?",
          sender: "bot",
        },
      ],
      apiKey: import.meta.env.VITE_GEMINI_API_KEY, //ALOPEisAmazing
      allowedKeywords: [
        "pengertian dan informasi seputar batik hingga cara pembuatannya",
        "pengelolaan sampah dari pakaian",
        "cara membuat pakaian dari sampah",
        "cara agar sampah bisa didaur ulang jadi pakaian",
        "cara agar sampah bisa diminimalisir",
        "kalimat sapaan seperti halo dan hai",
      ],
    };
  },
  methods: {
    async sendMessage() {
      this.isLoading = true;
      if (!this.userInput.trim()) return;

      const userText = this.userInput.trim();
      this.messages.push({ text: userText, sender: "user" });

      this.userInput = "";

      try {
        const genAI = new GoogleGenerativeAI(this.apiKey);
        const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

        const prompt = `
          Kamu hanya boleh menjawab jika pertanyaan mengandung salah satu dari keyword berikut: ${this.allowedKeywords.join(
            ", "
          )}.
          Jika pertanyaan tidak relevan dengan keyword tersebut, jawab: "Saya hanya dapat menjawab pertanyaan terkait dengan topik yang ditentukan."

          Pertanyaan: ${userText}
        `;

        const result = await model.generateContent(prompt);
        const botResponse = await result.response.text();

        this.messages.push({ text: botResponse, sender: "bot" });
      } catch (error) {
        this.messages.push({
          text: "Terjadi kesalahan, coba lagi nanti.",
          sender: "bot",
        });
        console.error("Error:", error);
      } finally {
        this.userInput = "";
        this.isLoading = false;
      }
    },
  },
};
</script>

<style>
@keyframes bounce {
  0%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-5px);
  }
}
.animate-bounce {
  animation: bounce 1.5s infinite ease-in-out;
}
.delay-150 {
  animation-delay: 0.2s;
}
.delay-300 {
  animation-delay: 0.4s;
}
</style>
