// Alarm Setting -> 문자 수신자 설정 -> "+"
// https://js.devexpress.com/Demos/WidgetsGallery/Demo/Validation/Overview/Vue/Light/

 <template>
 
 <div class="form">
    <div class="dx-fieldset">

      <div class="dx-field" style="width:500px;">
        <div class="dx-field-label">Sms Id</div>
        <div class="dx-field-value">
          <DxTextBox value="Sms Id"/>
        </div>
      </div>

      <div class="dx-field" style="width:500px;">
        <div class="dx-field-label">Sms Phonenumber</div>
        <div class="dx-field-value">
          <DxTextBox value="Sms Phonenumber">
           </DxTextBox>
        </div>
      </div>

      <div class="dx-field" style="width:500px;">
        <div class="dx-field-label">Sms Description</div>
        <div class="dx-field-value">
          <DxTextBox value="Sms Description"/>
        </div>
      </div>

      <div class="dx-field" style="width:500px;">
        <div class="dx-field-label">Sms Type</div>
        <div class="dx-field-value">
          <DxTextBox value="Sms Type"/>
        </div>
      </div>

      <div class="dx-field" style="width:500px;">
        <div class="dx-field-label">Sms Group</div>
        <div class="dx-field-value">
          <DxTextBox value="Sms Group"/>
        </div>
      </div>

      <div class="dx-field" style="width:500px;">
        <div class="dx-field-label">Sms Msg Id</div>
        <div class="dx-field-value">
          <DxTextBox value="Sms Msg Id"/>
        </div>
      </div>

      <div class="dx-field" style="width:500px;">
        <div class="dx-field-label">Create Date</div>
        <div class="dx-field-value">
          <DxTextBox value="Create Date"/>
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