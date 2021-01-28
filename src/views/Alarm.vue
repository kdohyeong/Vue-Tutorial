// Alarm Setting -> 경보 설정 -> "+" 위에 항목(세부내용 X)
// https://js.devexpress.com/Demos/WidgetsGallery/Demo/Validation/Overview/Vue/Light/

 <template>
 
 <div class="form">
    <div class="dx-fieldset">

      <div class="dx-field" style="width:500px;">
        <div class="dx-field-label">Alarm Id</div>
        <div class="dx-field-value">
          <DxTextBox value="Alarm Id"/>
        </div>
      </div>

      <div class="dx-field" style="width:500px;">
        <div class="dx-field-label">Tag Id</div>
        <div class="dx-field-value">
          <DxTextBox value="Tag Id">
           </DxTextBox>
        </div>
      </div>

      <div class="dx-field" style="width:500px;">
        <div class="dx-field-label">Alarm Name</div>
        <div class="dx-field-value">
          <DxTextBox value="Alarm Name"/>
        </div>
      </div>

      <div class="dx-field" style="width:500px;">
        <div class="dx-field-label">Alarm Description</div>
        <div class="dx-field-value">
          <DxTextBox value="Alarm Description"/>
        </div>
      </div>
      
      <div class="dx-field" style="width:500px;">
        <div class="dx-field-label">Alarm Hh</div>
        <div class="dx-field-value">
          <DxTextBox value="Alarm Hh"/>
        </div>
      </div>
      
      <div class="dx-field" style="width:500px;">
        <div class="dx-field-label">Alarm H</div>
        <div class="dx-field-value">
          <DxTextBox value="Alarm H"/>
        </div>
      </div>

      <div class="dx-field" style="width:500px;">
        <div class="dx-field-label">Alarm L</div>
        <div class="dx-field-value">
          <DxTextBox value="Alarm L"/>
        </div>
      </div>
      
      <div class="dx-field" style="width:500px;">
        <div class="dx-field-label">Alarm Ll</div>
        <div class="dx-field-value">
          <DxTextBox value="Alarm Ll"/>
        </div>
      </div>

      <div class="dx-field" style="width:500px;">
        <div class="dx-field-label">Alarm Type</div>
        <div class="dx-field-value">
          <DxTextBox value="Alarm Type"/>
        </div>
      </div>

      <div class="dx-field" style="width:500px;">
        <div class="dx-field-label">Alarm Format</div>
        <div class="dx-field-value">
          <DxTextBox value="Alarm Format"/>
        </div>
      </div>

      <div class="dx-field" style="width:500px;">
        <div class="dx-field-label">Alarm Script Id</div>
        <div class="dx-field-value">
          <DxTextBox value="Alarm Script Id"/>
        </div>
      </div>

      <div class="dx-field" style="width:500px;">
        <div class="dx-field-label">Alarm Sound Id</div>
        <div class="dx-field-value">
          <DxTextBox value="Alarm Sound Id"/>
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