// Alarm Setting -> 경보 설정 -> "+" 알람별 세부내용 부분
// https://js.devexpress.com/Demos/WidgetsGallery/Demo/Validation/Overview/Vue/Light/

 <template>
 
 <div class="form">
    <div class="dx-fieldset">

      <div class="dx-field" style="width:500px;">
        <div class="dx-field-label">Alarm Data</div>
        <div class="dx-field-value">
          <DxTextBox value="Alarm Data"/>
        </div>
      </div>

      <div class="dx-field" style="width:500px;">
        <div class="dx-field-label">Is Alarm Log</div>
        <div class="dx-field-value">
          <DxCheckBox :value="false"/>
        </div>
      </div>

      <div class="dx-field" style="width:500px;">
        <div class="dx-field-label">Alarm Sms Id</div>
        <div class="dx-field-value">
          <DxTextBox value="Alarm Sms Id"/>
        </div>
      </div>

      <div class="dx-field" style="width:500px;">
        <div class="dx-field-label">Is Alarm Sms</div>
        <div class="dx-field-value">
          <DxCheckBox :value="false"/>
        </div>
      </div>
      
      <div class="dx-field" style="width:500px;">
        <div class="dx-field-label">Alarm Grade</div>
        <div class="dx-field-value">
          <DxTextBox value="Alarm Grade"/>
        </div>
      </div>
      
      <div class="dx-field" style="width:500px;">
        <div class="dx-field-label">Alarm Group</div>
        <div class="dx-field-value">
          <DxTextBox value="Alarm Group"/>
        </div>
      </div>

      <div class="dx-field" style="width:500px;">
        <div class="dx-field-label">Alarm On Action</div>
        <div class="dx-field-value">
          <DxTextBox value="Alarm On Action"/>
        </div>
      </div>
      
      <div class="dx-field" style="width:500px;">
        <div class="dx-field-label">Alarm Off Action</div>
        <div class="dx-field-value">
          <DxTextBox value="Alarm Off Action"/>
        </div>
      </div>

      <div class="dx-field" style="width:500px;">
        <div class="dx-field-label">Alarm Created</div>
        <div class="dx-field-value">
          <DxTextBox value="Alarm Created"/>
        </div>
      </div>

      <div class="dx-field" style="width:500px;">
        <div class="dx-field-label">Alarm Normal Status</div>
        <div class="dx-field-value">
          <DxCheckBox :value="false"/>
        </div>
      </div>

      <div class="dx-field" style="width:500px;">
        <div class="dx-field-label">Alarm On</div>
        <div class="dx-field-value">
          <DxTextBox value="Alarm On"/>
        </div>
      </div>

      <div class="dx-field" style="width:500px;">
        <div class="dx-field-label">Alarm Off</div>
        <div class="dx-field-value">
          <DxTextBox value="Alarm Off"/>
        </div>
      </div>

      <div class="dx-field" style="width:500px;">
        <div class="dx-field-label">Alarm Deadband</div>
        <div class="dx-field-value">
          <DxTextBox value="Alarm Deadband"/>
        </div>
      </div>

      <div class="dx-field" style="width:500px;">
        <div class="dx-field-label">Alarm Occur Time</div>
        <div class="dx-field-value">
          <DxTextBox value="Alarm Occur Time"/>
        </div>
      </div>

      <div class="dx-field" style="width:500px;">
        <div class="dx-field-label">Alarm Release Time</div>
        <div class="dx-field-value">
          <DxTextBox value="Alarm Release Time"/>
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
import { DxCheckBox } from 'devextreme-vue/check-box';

export default {
  components: {
    DxTextBox,
    DxButton,
    DxCheckBox,
  },
};
</script>