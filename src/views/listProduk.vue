<template>
  <section
    class="relative text-center py-24 text-sekunder font-primary bg-cover bg-center"
    style="background-image: url('/image/hero.png')"
  >
    <div class="absolute inset-0 bg-black bg-opacity-70"></div>
    <div class="relative z-10">
      <h1 class="font-sekunder text-4xl my-5">List Produk</h1>
      <p>
        Temukan beragam batik berkualitas, dari batik baru, second,
        <br class="hidden md:inline" />
        hingga koleksi ReBatik—mengusung tradisi, keberlanjutan,
        <br class="hidden md:inline" />
        dan gaya ramah lingkungan.
      </p>
    </div>
  </section>

  <section
    class="grid md:grid-cols-4 lg:px-14 px-10 container mx-auto gap-10 my-10"
  >
    <div class="lg:col-span-1 col-span-4">
      <div class="border-primary border-2 py-4 px-3 rounded">
        <div class="relative">
          <input
            type="text"
            id="search"
            placeholder="Cari Batik"
            class="w-full border border-primary rounded-lg p-2 focus:ring-red-500 focus:border-red-500"
          />
          <i class="fas fa-search absolute right-3 top-3 text-primary"></i>
        </div>
        <h2 class="py-4">Gender</h2>
        <div class="flex flex-wrap gap-3">
          <button
            class="mx-2 px-6 py-3 text-sm font-medium rounded border border-primary transition duration-300 ease-in-out hover:text-white hover:bg-primary hover:border-transparent focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            Pria
          </button>

          <button
            class="mx-2 px-6 py-3 text-sm font-medium rounded border border-primary transition duration-300 ease-in-out hover:text-white hover:bg-primary hover:border-transparent focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            Wanita
          </button>
        </div>
        <h2 class="py-4">Kategori</h2>
        <div class="flex gap-3 flex-wrap">
          <button
            class="mx-2 px-6 py-3 text-sm font-medium rounded border border-primary transition duration-300 ease-in-out hover:text-white hover:bg-primary hover:border-transparent focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            Baru
          </button>
          <button
            class="mx-2 px-6 py-3 text-sm font-medium rounded border border-primary transition duration-300 ease-in-out hover:text-white hover:bg-primary hover:border-transparent focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            Second
          </button>
          <button
            class="mx-2 px-6 py-3 text-sm font-medium rounded border border-primary transition duration-300 ease-in-out hover:text-white hover:bg-primary hover:border-transparent focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            ReBatik
          </button>
        </div>
        <h2 class="py-4">Ukuran</h2>
        <div class="flex gap-3 flex-wrap">
          <button
            class="mx-2 px-5 py-3 text-sm font-medium rounded border border-primary transition duration-300 ease-in-out hover:text-white hover:bg-primary hover:border-transparent focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            XS
          </button>
          <button
            class="mx-2 px-5 py-3 text-sm font-medium rounded border border-primary transition duration-300 ease-in-out hover:text-white hover:bg-primary hover:border-transparent focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            M
          </button>
          <button
            class="mx-2 px-5 py-3 text-sm font-medium rounded border border-primary transition duration-300 ease-in-out hover:text-white hover:bg-primary hover:border-transparent focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            L
          </button>
          <button
            class="mx-2 px-5 py-3 text-sm font-medium rounded border border-primary transition duration-300 ease-in-out hover:text-white hover:bg-primary hover:border-transparent focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            XL
          </button>
          <button
            class="mx-2 px-5 py-3 text-sm font-medium rounded border border-primary transition duration-300 ease-in-out hover:text-white hover:bg-primary hover:border-transparent focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            2XL
          </button>
          <button
            class="mx-2 px-5 py-3 text-sm font-medium rounded border border-primary transition duration-300 ease-in-out hover:text-white hover:bg-primary hover:border-transparent focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            3XL
          </button>
        </div>
        <h2 class="py-4">Harga</h2>
        <div class="mx-2 flex gap-4 mb-3 accent-primary">
          <input type="checkbox" />
          <p class="text-sm">Tinggi Ke Rendah</p>
        </div>
        <div class="mx-2 flex gap-4 accent-primary">
          <input type="checkbox" />
          <p class="text-sm">Rendah Ke Tinggi</p>
        </div>
      </div>
    </div>
    <div
      class="lg:col-span-3 col-span-4 grid sm:grid-cols-2 md:grid-cols-3 lg:gap-10 gap-5"
    >
      <div>
        <RouterLink to="detailProduk">
          <div
            class="bg-white border border-primary rounded-lg shadow-lg overflow-hidden mb-10"
          >
            <img
              class="w-full aspect-[4/3] object-cover"
              src="/image/produk/kemeja 3.jpg"
              alt="Batik Motif Kawung"
            />
            <div class="p-4">
              <div class="flex justify-between items-center min-h-[56px]">
                <h3 class="text-lg font-semibold min-h-[48px]">
                  Batik Motif Bunga
                </h3>
                <p class="text-gray-600 text-sm">M-XL</p>
              </div>
              <p class="text-gray-800 font-bold min-h-[24px]">Rp. 100.000</p>
              <div class="flex items-center mt-2">
                <span class="text-yellow-500">★</span>
                <span class="text-gray-600 ml-1">9.5 (1)</span>
              </div>
              <div class="flex items-center justify-between mt-2">
                <span
                  class="inline-block px-3 py-1 bg-primary/30 text-primary text-xs font-semibold rounded-full"
                  >BaThrift</span
                >
                <img src="/image/logo/logo 2.png" alt="Logo" class="w-20 h-8" />
              </div>
            </div>
          </div>
        </RouterLink>
        <RouterLink to="detailProduk">
          <div
            class="bg-white border border-primary rounded-lg shadow-lg overflow-hidden mb-10"
          >
            <img
              class="w-full aspect-[4/3] object-cover"
              src="/image/produk/kemeja 4.jpg"
              alt="Batik Motif Kawung"
            />
            <div class="p-4">
              <div class="flex justify-between items-center min-h-[56px]">
                <h3 class="text-lg font-semibold min-h-[48px]">
                  Batik Motif Angsa
                </h3>
                <p class="text-gray-600 text-sm">XL</p>
              </div>
              <p class="text-gray-800 font-bold min-h-[24px]">Rp. 125.000</p>
              <div class="flex items-center mt-2">
                <span class="text-yellow-500">★</span>
                <span class="text-gray-600 ml-1">-</span>
              </div>
              <div class="flex items-center justify-between mt-2">
                <span
                  class="inline-block px-3 py-1 bg-primary/30 text-primary text-xs font-semibold rounded-full"
                  >BaThrift</span
                >
                <img src="/image/logo/logo 2.png" alt="Logo" class="w-20 h-8" />
              </div>
            </div>
          </div>
        </RouterLink>
        <RouterLink to="detailProduk">
          <div
            class="bg-white border border-primary rounded-lg shadow-lg overflow-hidden mb-10"
          >
            <img
              class="w-full aspect-[4/3] object-cover"
              src="/image/produk/kemeja 2.jpg"
              alt="Batik Motif Kawung"
            />
            <div class="p-4">
              <div class="flex justify-between items-center min-h-[56px]">
                <h3 class="text-lg font-semibold min-h-[48px]">
                  Batik Motif Garuda
                </h3>
                <p class="text-gray-600 text-sm">S-3XL</p>
              </div>
              <p class="text-gray-800 font-bold min-h-[24px]">Rp. 350.000</p>
              <div class="flex items-center mt-2">
                <span class="text-yellow-500">★</span>
                <span class="text-gray-600 ml-1">9.5 (100)</span>
              </div>
              <div class="flex items-center justify-between mt-2">
                <span
                  class="inline-block px-3 py-1 bg-primary/30 text-primary text-xs font-semibold rounded-full"
                  >Baru</span
                >
                <img src="/image/logo/logo 2.png" alt="Logo" class="w-20 h-8" />
              </div>
            </div>
          </div>
        </RouterLink>
      </div>
      <div>
        <RouterLink to="detailProduk">
          <div
            class="bg-white border border-primary rounded-lg shadow-lg overflow-hidden mb-10"
          >
            <img
              class="w-full aspect-[4/3] object-cover"
              src="/image/produk/rebatik 1.png"
              alt="Batik Motif Kawung"
            />
            <div class="p-4">
              <div class="flex justify-between items-center min-h-[56px]">
                <h3 class="text-lg font-semibold min-h-[48px]">Tas Kain</h3>
                <p class="text-gray-600 text-sm">-</p>
              </div>
              <p class="text-gray-800 font-bold min-h-[24px]">Rp. 25.000</p>
              <div class="flex items-center mt-2">
                <span class="text-yellow-500">★</span>
                <span class="text-gray-600 ml-1">9.5 (100)</span>
              </div>
              <div class="flex items-center justify-between mt-2">
                <span
                  class="inline-block px-3 py-1 bg-primary/30 text-primary text-xs font-semibold rounded-full"
                  >ReBatik</span
                >
                <img src="/image/logo/logo 2.png" alt="Logo" class="w-20 h-8" />
              </div>
            </div>
          </div>
        </RouterLink>
        <RouterLink to="detailProduk">
          <div
            class="bg-white border border-primary rounded-lg shadow-lg overflow-hidden mb-10"
          >
            <img
              class="w-full aspect-[4/3] object-cover"
              src="/image/produk/kemeja 6.jpg"
              alt="Batik Motif Kawung"
            />
            <div class="p-4">
              <div class="flex justify-between items-center min-h-[56px]">
                <h3 class="text-lg font-semibold min-h-[48px]">
                  Batik Motif Burung
                </h3>
                <p class="text-gray-600 text-sm">L-XL</p>
              </div>
              <p class="text-gray-800 font-bold min-h-[24px]">Rp. 150.000</p>
              <div class="flex items-center mt-2">
                <span class="text-yellow-500">★</span>
                <span class="text-gray-600 ml-1">9.5(1)</span>
              </div>
              <div class="flex items-center justify-between mt-2">
                <span
                  class="inline-block px-3 py-1 bg-primary/30 text-primary text-xs font-semibold rounded-full"
                  >BaThrift</span
                >
                <img src="/image/logo/logo 2.png" alt="Logo" class="w-20 h-8" />
              </div>
            </div>
          </div>
        </RouterLink>
        <RouterLink to="detailProduk">
          <div
            class="bg-white border border-primary rounded-lg shadow-lg overflow-hidden mb-10"
          >
            <img
              class="w-full aspect-[4/3] object-cover"
              src="/image/produk/rebatik 3.png"
              alt="Batik Motif Kawung"
            />
            <div class="p-4">
              <div class="flex justify-between items-center min-h-[56px]">
                <h3 class="text-lg font-semibold min-h-[48px]">Topi Fashion</h3>
                <p class="text-gray-600 text-sm">S-3XL</p>
              </div>
              <p class="text-gray-800 font-bold min-h-[24px]">Rp. 15.000</p>
              <div class="flex items-center mt-2">
                <span class="text-yellow-500">★</span>
                <span class="text-gray-600 ml-1">9.5 (100)</span>
              </div>
              <div class="flex items-center justify-between mt-2">
                <span
                  class="inline-block px-3 py-1 bg-primary/30 text-primary text-xs font-semibold rounded-full"
                  >ReBatik</span
                >
                <img src="/image/logo/logo 2.png" alt="Logo" class="w-20 h-8" />
              </div>
            </div>
          </div>
        </RouterLink>
      </div>
      <div>
        <RouterLink to="detailProduk">
          <div
            class="bg-white border border-primary rounded-lg shadow-lg overflow-hidden mb-10"
          >
            <img
              class="w-full aspect-[4/3] object-cover"
              src="/image/produk/kemeja 5.jpg"
              alt="Batik Motif Kawung"
            />
            <div class="p-4">
              <div class="flex justify-between items-center min-h-[56px]">
                <h3 class="text-lg font-semibold min-h-[48px]">
                  Batik Motif Kawung
                </h3>
                <p class="text-gray-600 text-sm">M</p>
              </div>
              <p class="text-gray-800 font-bold min-h-[24px]">Rp. 150.000</p>
              <div class="flex items-center mt-2">
                <span class="text-yellow-500">★</span>
                <span class="text-gray-600 ml-1">-</span>
              </div>
              <div class="flex items-center justify-between mt-2">
                <span
                  class="inline-block px-3 py-1 bg-primary/30 text-primary text-xs font-semibold rounded-full"
                  >BaThrift</span
                >
                <img src="/image/logo/logo 2.png" alt="Logo" class="w-20 h-8" />
              </div>
            </div>
          </div>
        </RouterLink>
        <RouterLink to="detailProduk">
          <div
            class="bg-white border border-primary rounded-lg shadow-lg overflow-hidden mb-10"
          >
            <img
              class="w-full aspect-[4/3] object-cover"
              src="/image/produk/rebatik 2.png"
              alt="Batik Motif Kawung"
            />
            <div class="p-4">
              <div class="flex justify-between items-center min-h-[56px]">
                <h3 class="text-lg font-semibold min-h-[48px]">Tas Belanja</h3>
                <p class="text-gray-600 text-sm">XL</p>
              </div>
              <p class="text-gray-800 font-bold min-h-[24px]">Rp. 20.000</p>
              <div class="flex items-center mt-2">
                <span class="text-yellow-500">★</span>
                <span class="text-gray-600 ml-1">9.5 (100)</span>
              </div>
              <div class="flex items-center justify-between mt-2">
                <span
                  class="inline-block px-3 py-1 bg-primary/30 text-primary text-xs font-semibold rounded-full"
                  >ReBatik</span
                >
                <img src="/image/logo/logo 2.png" alt="Logo" class="w-20 h-8" />
              </div>
            </div>
          </div>
        </RouterLink>
        <RouterLink to="detailProduk">
          <div
            class="bg-white border border-primary rounded-lg shadow-lg overflow-hidden mb-10"
          >
            <img
              class="w-full aspect-[4/3] object-cover"
              src="/image/produk/kemeja 1.png"
              alt="Batik Motif Kawung"
            />
            <div class="p-4">
              <div class="flex justify-between items-center min-h-[56px]">
                <h3 class="text-lg font-semibold min-h-[48px]">
                  Batik Motif Kawung
                </h3>
                <p class="text-gray-600 text-sm">S-3XL</p>
              </div>
              <p class="text-gray-800 font-bold min-h-[24px]">Rp. 350.000</p>
              <div class="flex items-center mt-2">
                <span class="text-yellow-500">★</span>
                <span class="text-gray-600 ml-1">9.5 (100)</span>
              </div>
              <div class="flex items-center justify-between mt-2">
                <span
                  class="inline-block px-3 py-1 bg-primary/30 text-primary text-xs font-semibold rounded-full"
                  >Baru</span
                >
                <img src="/image/logo/logo 2.png" alt="Logo" class="w-20 h-8" />
              </div>
            </div>
          </div>
        </RouterLink>
      </div>
    </div>
  </section>
</template>
<script>
import { RouterLink } from "vue-router";

export default {
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>
