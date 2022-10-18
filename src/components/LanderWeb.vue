<template>
  <div>
    <section class="section">
      <div class="container-fliud">
        <img alt="Vue logo" class="rounded-circle" src="../assets/profile.jpg" />
        <h1>Lindi Srijayanti</h1>
        <p>Sistem Informasi Akuntansi | Mahasiswi Universitas Bina Sarana Informatika Kampus Solo</p>
        <button type="button" class="btn btn-primary btn-lg">Contact</button>
      </div>
    </section>

    <section class="protfolio">
      <h1 id="project">Project</h1>
      <p>Beberapa project yang pernah saya buat</p>
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <div class="card">
              <div class="card-head">
                <img alt="Vue logo" class="rounded-circle img-custome" src="../assets/project1.jpg" />
                <h2>Inventory System</h2>
              </div>
              <hr />
              <div class="card-body">
                <p>Sistem Penjualan pada Studi Kasus di Boutique HR Ambar </p>
                <!-- <button type="button" class="btn btn-outline-secondary">More</button> -->
              </div>
            </div>
            <br />
          </div>
          <div class="col-md-4">
            <div class="card">
              <div class="card-head">
                <img alt="Vue logo" class="rounded-circle img-custome" src="../assets/project2.jpg" />
                <h2>SIA</h2>
              </div>
              <hr />
              <div class="card-body">
                <p>Membuat Sistem Informasi Akuntansi menggunakan framework Laravel</p>
                <!--<button type="button" class="btn btn-outline-secondary">More</button>-->
              </div>
            </div>
            <br />
          </div>
          <div class="col-md-4">
            <div class="card">
              <div class="card-head">
                <img alt="Vue logo" class="rounded-circle img-custome" src="../assets/project3.jpg" />
                <h2>Web Portfolio</h2>
              </div>
              <hr />
              <div class="card-body">
                <p>Membuat website portofolio menggunakan Bootstrap 5, HTML, CSS, dan JavaScript.</p>
                <!--<button type="button" class="btn btn-outline-secondary">More</button>-->
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="contact">
      <div id="contact">
        <div class="container" style="padding:10%">
          <h2>Contact Me</h2>
          <form action="mailto:lindisrijayanti3771@gmail.com" method="post" enctype="text/plain">
            <div>
              <input type="text" class="form-control"  placeholder="your name">
            </div>
            <div>
              <input type="email" class="form-control"  placeholder="enter email">
            </div>

            <div class="form-group">
              <textarea class="form-control" 
               rows="3" placeholder="write message">
              </textarea>
          </div>
          </form>
          <button type="button"  class="btn btn-primary btn-lg">
            Submit
        </button>
        </div>
      </div>
    </section>
  </div>

</template>

<style lang="css" scoped>
.section {
  padding-top: 10%;
  padding-bottom: 10%;
}
.section img {
  width: 15rem;
}
.protfolio{
  background-color: #34345238;
  padding-top: 8%;
  padding-bottom: 15%;
  /* padding:15% */
}
.img-custome{
  width: 140px;
  height: 140px;
  margin-top: 15px;
}
</style>
