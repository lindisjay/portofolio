<template>
    <div>
        <div class="container" style="padding:10%">
            <h2>Contact Me</h2>
            <form action="lindisrijayanti3771@gmail.com" 
              method="post" enctype="text/plain">
                <div class="form-group">
                    <input type="email" class="form-control"
                      v-model="contact.email" placeholder="Enter email">
                </div>
                <div class="form-group">
                    <textarea class="form-control" 
                    v-model="contact.message" rows="3" placeholder="write message">
                    </textarea>
                </div>
            </form>
            
            <button type="button"  class="btn btn-primary btn-lg">
                Contact
            </button>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    data(){
        return {
            contact:{
                email:'',
                message:''
            }
        }
    },
    
    methods:{
        submit(){
            //memvalidasi form
            if(this.contact.email !="" && this.contact.message != ""){
                // mengirim detail ke email
            }else{
                alert("All fields are required");
            }
        }
    }
}

</script>