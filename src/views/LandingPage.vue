<script>
import axios from 'axios';
import { ref } from 'vue';

const allBuku = 'http://localhost/library/selectallbuku.php';
const loginApi = 'https://novrirahman.my.id/donasi/login.php';

export default {
  data() {
    return {
      donatur: ref([]),
      allDonatur: ref([]),
      username: '',
      password: '',
      stts: '',
      data: '',
    };
  },

  mounted() {
    this.readData();
  },

  methods: {
    readData() {
      axios.get(allBuku)
        .then((resp) => {
          console.log(resp);
          this.buku = resp.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },

    login() {
      let formData = new FormData();

      formData.append('username', this.username);
      formData.append('password', this.password);

      axios
        .post(loginApi, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then((resp) => {
          console.log(resp);
          if (resp.status == 200 && resp.data.username == this.username) {
            console.log('login berhasil');
            localStorage.setItem('user-info', JSON.stringify(resp.data[0]));
            this.$router.push({ name: 'dashboard' });
          }
          if (resp.message == 'Request failed with status code 404') {
            console.log('gagal login');
          }
        })
        .catch((err) => {
          console.log(err);
          alert('Username dan Password Kamu Salah!!!');
        });
    },
  },
}
</script>


<template>
  <!-- Navbar -->
  <nav class="navbar navbar-dark bg-dark fixed-top">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Smart Library</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar"
        aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar"
        aria-labelledby="offcanvasDarkNavbarLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">
            Smart Library
          </h5>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                Silahkan Login
              </a>
            </li>
            <div class="input-group mb-3">
              <input type="text" class="form-control" v-model="username" aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default" placeholder="Username" />
            </div>
            <div class="input-group mb-3">
              <input type="password" class="form-control" v-model="password" aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default" placeholder="Password" />
            </div>
            <button type="button" class="btn btn-primary" v-on:click="login">
              Login
            </button>
          </ul>
        </div>
      </div>
    </div>
  </nav>
  <!-- Page content -->
  <div id="carouselExampleDark" class="carousel carousel-dark slide">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true"
        aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active" data-bs-interval="10000">
        <img src="../assets/lib1.jpg" class="d-block w-100" alt="..." />
        <div class="carousel-caption d-none d-md-block mb-5">
          <h2 style="color: aliceblue">Smart Library</h2>
          <p style="color: aliceblue">Jl.Menuju Keilmuan</p>
          <a href="#table"><button type="button" class="btn btn-secondary">
              Selengkapnya
            </button></a>
        </div>
      </div>
      <div class="carousel-item" data-bs-interval="2000">
        <img src="../assets/lib2.jpg" class="d-block w-100" alt="..." />
        <div class="carousel-caption d-none d-md-block mb-5">
          <h2 style="color: aliceblue">Smart Library</h2>
          <p style="color: aliceblue">Jl.Menuju Keilmuan</p>
          <a href="#table"><button type="button" class="btn btn-secondary">
              Selengkapnya
            </button></a>
        </div>
      </div>
      <div class="carousel-item">
        <img src="../assets/lib3.jpg" class="d-block w-100" alt="..." />
        <div class="carousel-caption d-none d-md-block mb-5">
          <h2 style="color: aliceblue">Smart Library</h2>
          <p style="color: aliceblue">Jl.Menuju Keilmuan</p>
          <a href="#table"><button type="button" class="btn btn-secondary">
              Selengkapnya
            </button></a>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>

  <div class="container mb-5">
    <div class="headerpapan">
      <h1 class="text-center">
        Smart Library
      </h1>
    </div>
    <div class="table-responsive">
      <table class="table border table-hover mt-5" id="table">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Kode</th>
            <th scope="col">Kode Kategori</th>
            <th scope="col">Judul</th>
            <th scope="col">Pengarang</th>
            <th scope="col">Penerbit</th>
            <th scope="col">Tahun</th>
            <th scope="col">Tanggal Input</th>
            <th scope="col">Harga</th>
            <th scope="col">Cover</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(data, index) in buku" :key="data.kode">
            <td>{{ index + 1 }}</td>
            <td>{{ data.kode }}</td>
            <td>{{ data.kode_kategori }}</td>
            <td>{{ data.judul }}</td>
            <td>{{ data.pengarang }}</td>
            <td>{{ data.penerbit }}</td>
            <td>{{ data.tahun }}</td>
            <td>{{ data.tanggal_input }}</td>
            <td>Rp.{{ data.harga }}</td>
            <td>
              <img :src="data.file_cover" alt="file_cover" style="max-width: 150px" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>


<style scoped>
.nav-link {
  margin-bottom: 10px;
  font-size: 30px;
  text-align: center;
}

.headerpapan {
  margin-top: 70px;
  text-align: center;
}

/* .img-fluid {
        height: 880px;
        width: 1650px;
    } */
</style>
