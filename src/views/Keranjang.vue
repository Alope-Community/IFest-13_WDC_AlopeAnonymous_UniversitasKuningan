<template>
  <section
    class="relative text-center py-24 text-sekunder font-primary bg-cover bg-center"
    style="background-image: url('/image/hero.png')"
  >
    <div class="absolute inset-0 bg-black bg-opacity-70"></div>
    <div class="relative z-10">
      <h1 class="font-sekunder text-4xl my-5">Keranjang</h1>
      <p>
        Cek kembali produk pilihan Anda dan jadilah bagian
        <br class="hidden md:inline" />
        dari perubahan! Dukung keberlanjutan dengan
        <br class="hidden md:inline" />
        memilih batik ramah lingkungan
      </p>
    </div>
  </section>

  <div class="container mx-auto xl:px-20 md:px-10 px-5 pt-10 pb-10">
    <h1 class="text-xl sm:text-2xl font-semibold mb-2 text-gray-900">
      Keranjang Belanja
    </h1>
    <p class="text-gray-700 font-semibold mb-6 text-sm sm:text-base">
      3 batik di keranjangmu
    </p>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div class="lg:col-span-2">
        <div class="border-2 border-primary rounded-lg shadow p-4 sm:p-6">
          <div class="overflow-x-auto">
            <!-- Checkbox Pilih Semua -->
            <div class="flex items-center mb-4">
              <input
                type="checkbox"
                v-model="selectAll"
                @change="toggleSelectAll"
                class="mr-2 text-primary focus:ring-primary"
              />
              <span class="text-sm sm:text-base">Pilih Semua Produk</span>
            </div>

            <table class="w-full text-center text-sm sm:text-base">
              <thead>
                <tr class="border-b">
                  <th class="text-left pl-1 py-2">Produk</th>
                  <th>Harga</th>
                  <th>Jumlah</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b" v-for="item in cartItems" :key="item.id">
                  <td class="py-4">
                    <div
                      class="flex flex-col sm:flex-row items-start sm:items-center"
                    >
                      <input
                        type="checkbox"
                        v-model="selectedItems"
                        :value="item.id"
                        class="mr-2 text-primary focus:ring-primary accent-primary"
                      />
                      <img
                        :src="item.image"
                        alt="item.name"
                        class="w-16 h-16 rounded"
                      />
                      <div class="ml-2 sm:ml-4 mt-2 sm:mt-0 text-left">
                        <h2 class="text-sm sm:text-md">{{ item.gender }}</h2>
                        <RouterLink
                          to=""
                          class="text-sm sm:text-lg font-semibold"
                        >
                          {{ item.name }}
                        </RouterLink>
                        <p class="text-md sm:text-sm text-gray-700">
                          Kondisi {{ item.condition }}
                        </p>
                        <p class="text-md sm:text-sm text-gray-700">
                          Ukuran {{ item.size }}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td class="py-4 font-bold whitespace-nowrap">
                    Rp. {{ item.price.toLocaleString() }}
                  </td>
                  <td class="py-4">
                    <div class="flex items-center justify-center">
                      <button class="px-2 py-1 border">-</button>
                      <span class="mx-2">{{ item.quantity }}</span>
                      <button class="px-2 py-1 border">+</button>
                    </div>
                  </td>
                  <td class="py-4 font-bold whitespace-nowrap">
                    Rp. {{ (item.price * item.quantity).toLocaleString() }}
                  </td>
                  <td class="text-center">
                    <button>
                      <i class="fa-solid fa-trash text-red-500"></i>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- Kalkulasi Pengiriman -->
      <div class="lg:col-span-1">
        <div class="border-primary border-2 rounded-lg shadow p-4 sm:p-6">
          <h2 class="font-bold mb-4 text-lg text-gray-900">
            Kalkulasi Pengiriman
          </h2>
          <select
            v-model="selectedProvince"
            class="w-full mb-2 p-2 border rounded-md border-primary text-gray-700"
          >
            <option disabled value="">Pilih Provinsi</option>
            <option v-for="province in provinces" :key="province">
              {{ province }}
            </option>
          </select>
          <select
            v-model="selectedCity"
            class="w-full mb-2 p-2 border rounded-md border-primary text-gray-700"
          >
            <option disabled value="">Pilih Kabupaten / Kota</option>
            <option v-for="city in cities" :key="city">{{ city }}</option>
          </select>
          <input
            type="text"
            placeholder="Kode Pos"
            class="w-full mb-4 p-2 border rounded-md border-primary"
          />
          <button
            class="w-full py-2 px-6 bg-primary text-white rounded-lg hover:bg-primary/90 transition"
          >
            Update
          </button>

          <h2 class="font-bold mt-6 mb-4 text-lg">Voucher Diskon</h2>
          <p class="text-xs sm:text-sm mb-2">
            Dapatkan voucher dengan menukarkan baju/kain batik kalian pada
            halaman
            <a href="#" class="text-blue-500 font-semibold underline"
              >ReBatik</a
            >
          </p>
          <select class="w-full p-2 mb-2 border-primary border-2 rounded-md">
            <option>ReBatik Discount 10%</option>
          </select>
          <div class="border-2 border-primary p-4 sm:p-6 rounded-md shadow-lg">
            <h2 class="font-semibold text-lg sm:text-2xl mb-6">
              Total Belanja
            </h2>
            <div class="text-xs sm:text-sm space-y-4">
              <div class="flex justify-between">
                <span>Subtotal keranjang</span>
                <span>Rp. 1.125.000</span>
              </div>
              <div class="flex justify-between text-red-600">
                <span>Voucher Diskon</span>
                <span>- Rp. 112.500</span>
              </div>
              <div class="flex justify-between">
                <span>Subtotal Pengiriman</span>
                <span>Rp. 25.000</span>
              </div>
              <div class="flex justify-between">
                <span>Biaya Layanan</span>
                <span>Rp. 2.000</span>
              </div>
            </div>
            <div class="border-t mt-6 pt-4 font-bold flex justify-between mb-5">
              <span>TOTAL</span>
              <span>Rp. 1.039.500</span>
            </div>

            <router-link
              to="Checkout"
              class="w-full mt-10 py-3 px-3 flex justify-center bg-primary text-white rounded-md hover:bg-primary/90 transition"
            >
              Check Out
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { RouterLink } from "vue-router";

export default {
  data() {
    return {
      cartItems: [
        {
          id: 1,
          gender: "PRIA",
          name: "Batik Motif Kawung",
          condition: "Baru",
          size: "XL",
          price: 350000,
          quantity: 2,
          image: "/image/produk/kemeja 1.png",
        },
        {
          id: 2,
          gender: "WANITA",
          name: "Batik Pekalongan",
          condition: "Second",
          size: "L",
          price: 425000,
          quantity: 1,
          image: "/image/page/wanita1.png",
        },
        {
          id: 3,
          gender: "WANITA",
          name: "Batik Pekalongan",
          condition: "Second",
          size: "XL",
          price: 425000,
          quantity: 1,
          image: "/image/page/wanita1.png",
        },
      ],
      selectedItems: [],
      selectAll: false,
      selectedProvince: "",
      selectedCity: "",
      provinces: [
        "Jawa Barat",
        "Jawa Tengah",
        "Jawa Timur",
        "DKI Jakarta",
        "Bali",
      ],
      cities: [
        "Kuningan",
        "Bandung",
        "Semarang",
        "Surabaya",
        "Jakarta",
        "Denpasar",
      ],
    };
  },
  methods: {
    toggleSelectAll() {
      this.selectedItems = this.selectAll
        ? this.cartItems.map((item) => item.id)
        : [];
    },
  },
  name: "keranjang",
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style scoped>
input[type="checkbox"] {
  width: 1rem;
  height: 1rem;
  accent-color: #a6752e;
}
</style>
