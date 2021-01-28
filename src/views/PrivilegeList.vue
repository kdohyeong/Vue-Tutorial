// 보안 설정 -> 권한 설정 -> "+" -> "edit row"
// https://js.devexpress.com/Demos/WidgetsGallery/Demo/Validation/Overview/Vue/Light/

 <template>
 
 <div class="form">
    <div class="dx-fieldset">

      <div class="dx-field" style="width:500px;">
        <div class="dx-field-label">Prild</div>
        <div class="dx-field-value">
          <DxTextBox value="Prild"/>
        </div>
      </div>

      <div class="dx-field" style="width:500px;">
        <div class="dx-field-label">PriLevel</div>
        <div class="dx-field-value">
          <DxTextBox value="PriLevel"/>
        </div>
      </div>

      <div class="dx-field" style="width:500px;">
        <div class="dx-field-label">PriName</div>
        <div class="dx-field-value">
          <DxTextBox value="PriName"/>
        </div>
      </div>

      <div class="dx-field" style="width:500px;">
        <div class="dx-field-label">PriGroup</div>
        <div class="dx-field-value">
          <DxTextBox value="PriGroup"/>
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