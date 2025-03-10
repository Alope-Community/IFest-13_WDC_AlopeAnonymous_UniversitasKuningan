<template>
  <section
    class="relative text-center py-24 text-sekunder font-primary bg-cover bg-center"
    style="background-image: url('/image/page/Rebatik.jpg')"
  >
    <div class="absolute inset-0 bg-black bg-opacity-70"></div>
    <div class="relative z-10">
      <h1 class="font-sekunder text-4xl my-5">ReBatik</h1>
      <p>
        ReBatik mengolah kain perca atau batik rusak menjadi
        <br class="hidden md:inline" />
        tas dan aksesori, mengurangi limbah tekstil, serta
        <br class="hidden md:inline" />
        melestarikan batik secara berkelanjutan.
      </p>
    </div>
  </section>

  <main class="xl:px-20 md:px-10 px-5 pt-10 container mx-auto">
    <section class="flex flex-col md:flex-row gap-3 md:gap-16 items-center">
      <img
        src="/image/page/Rebatik 2.svg"
        alt=""
        class="h-auto md:h-4/5 w-1/2 md:w-auto"
      />
      <div class="pb-12">
        <h2
          class="lg:text-3xl text-2xl text-primary font-semibold italic mb-6 mt-14 text-center md:text-left"
        >
          Apa Itu ReBatik
        </h2>
        <p class="mb-3 text-sm lg:text-base text-gray-700 text-justify">
          Setiap tahun, industri tekstil menghasilkan jutaan ton limbah kain
          yang mencemari lingkungan, termasuk batik yang rusak atau tak
          terpakai. Tanpa pengelolaan yang baik, sampah ini terus menumpuk dan
          sulit terurai.
        </p>
        <p class="mb-3 text-sm lg:text-base text-gray-700 text-justify">
          ReBatik hadir untuk mengurangi limbah dengan mengubah kain perca atau
          batik rusak menjadi produk baru, seperti tas, aksesori, dan dekorasi.
          Dengan konsep upcycling, kami melestarikan batik sambil mendukung
          keberlanjutan.
        </p>
        <p class="text-sm lg:text-base text-gray-700 text-justify">
          Kirimkan batik lama Anda dan dapatkan voucher diskon sebagai
          apresiasi. Bersama, kita menjaga budaya dan lingkungan dengan memberi
          kehidupan baru pada kain batik.
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
            class="mt-6 w-full bg-primary text-white py-2 rounded-lg hover:bg-primary/90"
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
          Koleksi ReBatik Kami
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
  name: "ReBatik",
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>
