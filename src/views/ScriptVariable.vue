// System Setting -> 스크립트 변수 -> "ADD ROW"
// https://js.devexpress.com/Demos/WidgetsGallery/Demo/Validation/Overview/Vue/Light/

 <template>
 
 <div class="form">
    <div class="dx-fieldset">

      <div class="dx-field" style="width:500px;">
        <div class="dx-field-label">ID</div>
        <div class="dx-field-value">
          <DxTextBox value="ID"/>
        </div>
      </div>

      <div class="dx-field" style="width:500px;">
        <div class="dx-field-label">VariableName *</div>
        <div class="dx-field-value">
          <DxTextBox>
             <DxValidator>
              <DxRequiredRule message="VariableName is required"/>
            </DxValidator>
           </DxTextBox>
        </div>
      </div>

      <div class="dx-field" style="width:500px;">
        <div class="dx-field-label">VariableType</div>
        <div class="dx-field-value">
          <DxTextBox value="VariableType"/>
        </div>
      </div>

      <div class="dx-field" style="width:500px;">
        <div class="dx-field-label">InitialValue</div>
        <div class="dx-field-value">
          <DxTextBox value="InitialValue"/>
        </div>
      </div>
      
      <div class="dx-field" style="width:500px;">
        <div class="dx-field-label">GROUP</div>
        <div class="dx-field-value">
          <DxTextBox value="GROUP"/>
        </div>
      </div>
      
      <div class="dx-field" style="width:500px;">
        <div class="dx-field-label">DESCRIPTION</div>
        <div class="dx-field-value">
          <DxTextBox value="DESCRIPTION"/>
        </div>
      </div>

      <div class="dx-field" style="width:500px;">
        <div class="dx-field-label">UPDATETIME</div>
        <div class="dx-field-value">
          <DxTextBox value="UPDATETIME"/>
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
import {
  DxValidator,
  DxRequiredRule,
} from 'devextreme-vue/validator';

export default {
  components: {
    DxTextBox,
    DxButton,
    DxValidator,
    DxRequiredRule,
  },
};
</script>