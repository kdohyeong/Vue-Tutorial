// Graphic Editor -> 페이지 그룹 설정 -> "+"
// https://js.devexpress.com/Demos/WidgetsGallery/Demo/Validation/Overview/Vue/Light/

 <template>
 
 <div class="form">
    <div class="dx-fieldset">

      <div class="dx-field" style="width:500px;">
        <div class="dx-field-label">Id</div>
        <div class="dx-field-value">
          <DxTextBox value="Id"/>
        </div>
      </div>

      <div class="dx-field" style="width:500px;">
        <div class="dx-field-label">Name</div>
        <div class="dx-field-value">
          <DxTextBox value="Name"/>
        </div>
      </div>

      <div class="dx-field" style="width:500px;">
        <div class="dx-field-label">Page Id</div>
        <div class="dx-field-value">
          <DxTextBox value="Page Id"/>
        </div>
      </div>

      <div class="dx-field" style="width:500px;">
        <div class="dx-field-label">Type</div>
        <div class="dx-field-value">
          <DxTextBox value="Type"/>
        </div>
      </div>
      
      <div class="dx-field" style="width:500px;">
        <div class="dx-field-label">Parent Id</div>
        <div class="dx-field-value">
          <DxTextBox value="Parent Id"/>
        </div>
      </div>  
        

    <DxButton
        id="button"
        :use-submit-behavior="true"
        text="Save"
        type="success"
        style="width:140px;
               margin-left:200px;
               margin-right:20px;"

      />
      <DxButton
        id="button"
        :use-submit-behavior="true"
        text="Cancel"
        type="success"
        style="width:140px;"
      />            

    </div>
 </div>


</template>
<script>
import DxTextBox from 'devextreme-vue/text-box';
import DxButton from 'devextreme-vue/button';

export default {
  components: {
    DxTextBox,
    DxButton,
  },
};
</script>