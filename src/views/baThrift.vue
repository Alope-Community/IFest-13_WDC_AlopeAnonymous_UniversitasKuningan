<template>
  <section
    class="relative text-center py-24 text-sekunder font-primary bg-cover bg-center"
    style="background-image: url('/image/hero.png')"
  >
    <div class="absolute inset-0 bg-black bg-opacity-70"></div>
    <div class="relative z-10">
      <h1 class="font-sekunder text-4xl my-5">BaThrift</h1>
      <p>
        menghadirkan batik preloved berkualitas, memberi
        <br class="hidden md:inline" />
        kehidupan baru pada kain bernilai seni, sekaligus
        <br class="hidden md:inline" />
        mendukung fashion berkelanjutan.
      </p>
    </div>
  </section>

  <main class="xl:px-20 md:px-10 px-5 pt-10 container mx-auto">
    <section class="flex flex-col md:flex-row gap-3 md:gap-16 items-center">
      <img
        src="/image/page/2.png"
        alt=""
        class="h-auto md:h-[400px] w-1/2 md:w-auto"
      />
      <div class="pb-12">
        <h2
          class="lg:text-3xl text-2xl text-primary font-semibold italic mb-6 mt-14 text-center md:text-left"
        >
          Apa Itu BaThrift
        </h2>
        <p class="mb-3 text-sm lg:text-base text-gray-700 text-justify">
          Banyak batik menumpuk di lemari, tak terpakai karena kekecilan atau
          modelnya sudah tidak sesuai. Akhirnya, kain bernilai ini hanya menjadi
          limbah tekstil yang terus bertambah dan mencemari lingkungan.
        </p>
        <p class="mb-3 text-sm lg:text-base text-gray-700 text-justify">
          BaThrift hadir sebagai solusi untuk mengurangi limbah tekstil dengan
          memungkinkan Anda menjual batik second yang masih layak pakai. Dengan
          cara ini, batik lama tidak hanya terselamatkan dari pembuangan, Ini
          adalah langkah nyata untuk mendukung fesyen berkelanjutan dan ekonomi
          sirkular.
        </p>
        <p class="text-sm lg:text-base text-gray-700 text-justify">
          Selain memberi manfaat ekonomi, BaThrift membantu melestarikan budaya
          batik dengan memastikan kain-kain ini tetap bernilai dan digunakan
          lebih lama. Jual batik second Anda dengan mudah, dapatkan keuntungan,
          dan jadilah bagian dari gerakan fesyen ramah lingkungan.
        </p>
      </div>
    </section>

    <h2
      class="lg:text-3xl text-2xl text-primary font-semibold italic text-center mt-14"
    >
      Isi Form Berikut Ini
    </h2>

    <section class="flex items-center justify-center py-10">
      <form
        class="p-6 rounded-lg border-primary border-2 w-full max-w-4xl flex flex-col md:flex-row gap-6"
      >
        <div class="w-full md:w-1/2">
          <label class="block text-lg font-medium text-gray-900"
            >Upload Gambar dan Video</label
          >
          <div
            class="relative w-full h-64 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center cursor-pointer overflow-hidden mt-2"
            onclick="document.getElementById('file-upload').click()"
          >
            <img
              id="preview"
              class="absolute w-full h-full object-cover hidden"
            />
            <div
              id="placeholder"
              class="flex flex-col items-center text-gray-400"
            >
              <svg
                class="w-16 h-16 mb-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 16l-4-4m0 0l4-4m-4 4h16M15 12h5"
                ></path>
              </svg>
              <span>Klik untuk unggah gambar</span>
            </div>
          </div>
          <input
            id="file-upload"
            type="file"
            accept="image/*"
            class="hidden"
            onchange="previewImage(event)"
          />
          <p class="pt-3 text-sm text-red-600">
            * Upload minimal 3 gambar dan video
          </p>
          <p class="text-sm text-red-600">
            * Tunggu 5-10 menit admin menghubungi anda
          </p>
        </div>

        <div class="w-full md:w-1/2">
          <label class="block text-sm font-medium text-gray-700"
            >Nama Lengkap</label
          >
          <input
            type="text"
            class="w-full mt-2 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
            placeholder="Masukkan nama lengkap"
          />

          <label class="block text-sm font-medium text-gray-700 mt-4"
            >No HP</label
          >
          <input
            type="tel"
            class="w-full mt-2 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
            placeholder="Masukkan nomor HP"
          />

          <label class="block text-sm font-medium text-gray-700 mt-4"
            >Email</label
          >
          <input
            type="email"
            class="w-full mt-2 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
            placeholder="Masukkan email"
          />
          <label class="block text-sm font-medium text-gray-700 mt-4"
            >Alamat</label
          >
          <textarea
            class="w-full mt-2 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
            rows="2"
            placeholder="Masukkan alamat lengkap"
          ></textarea>

          <button
            type="submit"
            class="mt-6 w-full bg-white border-primary border-2 text-primary py-2 rounded-lg hover:bg-primary hover:text-white"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  </main>

  <section
    className="relative z-10 px-10 md:px-16 xl:px-20 flex items-center h-[250px] bg-[url(/image/hero.png)] bg-cover bg-center  mt-10 after:content-[''] after:absolute after:inset-0 after:bg-black/50 after:-z-10"
  >
    <div
      class="container mx-auto flex md:flex-row flex-col gap-10 items-center justify-center md:justify-between"
    >
      <div className="md:text-left text-center">
        <p className="font-medium text-xl md:text-2xl text-primary uppercase ">
          Tertarik Pesan?
        </p>
        <h1 className="text-2xl lg:text-3xl text-white font-bold">
          Koleksi BaThrift Kami
        </h1>
      </div>
      <div>
        <RouterLink
          to="listProduk"
          class="inline-flex items-center text-white px-6 py-3 border border-primary rounded-lg hover:bg-primary transition"
        >
          Pesan Sekarang<i class="fa-solid fa-arrow-right pl-2"></i>
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<script>
import { RouterLink } from "vue-router";
export default {
  name: "BaThrift",
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>
