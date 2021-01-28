// Unit Group 관리 -> "+"
// https://js.devexpress.com/Demos/WidgetsGallery/Demo/Validation/Overview/Vue/Light/

 <template>
 
 <div class="form">
    <div class="dx-fieldset">

      <div class="dx-field" style="width:500px;">
        <div class="dx-field-label">Unit Image</div>
        <div class="dx-field-value">
          <DxTextBox value="Unit Image"/>
        </div>
      </div>

      <div class="dx-field" style="width:500px;">
        <div class="dx-field-label">Unit Description</div>
        <div class="dx-field-value">
          <DxTextBox value="Unit Description">
           </DxTextBox>
        </div>
      </div>

      <div class="dx-field" style="width:500px;">
        <div class="dx-field-label">Unit Id</div>
        <div class="dx-field-value">
          <DxTextBox value="Unit Id"/>
        </div>
      </div>

      <div class="dx-field" style="width:500px;">
        <div class="dx-field-label">Unit Vendor</div>
        <div class="dx-field-value">
          <DxTextBox value="Unit Vendor"/>
        </div>
      </div>
      
      <div class="dx-field" style="width:500px;">
        <div class="dx-field-label">Tagid Remote</div>
        <div class="dx-field-value">
          <DxTextBox value="Tagid Remote"/>
        </div>
      </div>
      
      <div class="dx-field" style="width:500px;">
        <div class="dx-field-label">Tagid Local</div>
        <div class="dx-field-value">
          <DxTextBox value="Tagid Local"/>
        </div>
      </div>

      <div class="dx-field" style="width:500px;">
        <div class="dx-field-label">Tagid Control</div>
        <div class="dx-field-value">
          <DxTextBox value="Tagid Control"/>
        </div>
      </div>

      <div class="dx-field" style="width:500px;">
        <div class="dx-field-label">Tagid Status</div>
        <div class="dx-field-value">
          <DxTextBox value="Tagid Status"/>
        </div>
      </div>

      <div class="dx-field" style="width:500px;">
        <div class="dx-field-label">Tagid Value</div>
        <div class="dx-field-value">
          <DxTextBox value="Tagid Value"/>
        </div>
      </div>
      
      <div class="dx-field" style="width:500px;">
        <div class="dx-field-label">TAGID</div>
        <div class="dx-field-value">
          <DxTextBox value="TAGID"/>
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