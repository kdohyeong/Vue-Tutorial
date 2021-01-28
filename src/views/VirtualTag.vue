// TAG Editor -> 가상 태그 추가 -> "+"
// https://js.devexpress.com/Demos/WidgetsGallery/Demo/Validation/Overview/Vue/Light/

 <template>
 
 <div class="form">
    <div class="dx-fieldset">

      <div class="dx-field" style="width:500px;">
        <div class="dx-field-label">id</div>
        <div class="dx-field-value">
          <DxTextBox value="id"/>
        </div>
      </div>

      <div class="dx-field" style="width:500px;">
        <div class="dx-field-label">Tag ID</div>
        <div class="dx-field-value">
          <DxTextBox value="Tag ID">
           </DxTextBox>
        </div>
      </div>

      <div class="dx-field" style="width:500px;">
        <div class="dx-field-label">Tag Name</div>
        <div class="dx-field-value">
          <DxTextBox value="Tag Name"/>
        </div>
      </div>

      <div class="dx-field" style="width:500px;">
        <div class="dx-field-label">Tag Type</div>
        <div class="dx-field-value">
          <DxTextBox value="Tag Type"/>
        </div>
      </div>
      
      <div class="dx-field" style="width:500px;">
        <div class="dx-field-label">Tag Value Type</div>
        <div class="dx-field-value">
          <DxTextBox value="Tag Value Type"/>
        </div>
      </div>
      
      <div class="dx-field" style="width:500px;">
        <div class="dx-field-label">tagDescription</div>
        <div class="dx-field-value">
          <DxTextBox value="tagDescription"/>
        </div>
      </div>

      <div class="dx-field" style="width:500px;">
        <div class="dx-field-label">Update Time</div>
        <div class="dx-field-value">
          <DxTextBox value="Update Time"/>
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