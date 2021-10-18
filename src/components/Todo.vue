.<template>
  <div class="card shadow-smmb-2">
      <div class="card-body">
          <p class="m-0">
              {{toDo.text}}
          </p>
           <div class="btn btn-warning me-2">Close</div>
          <div class="btn btn-danger me-2">Delete</div>
            
      </div>
  </div>
</template>

<script>
export default {
props: {
    toDo:Object},

}
</script>

<style>

</style>