// 보안 설정 -> 사용자 설정 -> "+"
// https://js.devexpress.com/Demos/WidgetsGallery/Demo/Validation/Overview/Vue/Light/

 <template>
 
 <div class="form">
    <div class="dx-fieldset">

      <div class="dx-field" style="width:500px;">
        <div class="dx-field-label">UserId</div>
        <div class="dx-field-value">
          <DxTextBox value="UserId"/>
        </div>
      </div>

      <div class="dx-field" style="width:500px;">
        <div class="dx-field-label">UserName</div>
        <div class="dx-field-value">
          <DxTextBox value="UserName">
           </DxTextBox>
        </div>
      </div>

      <div class="dx-field" style="width:500px;">
        <div class="dx-field-label">UserPassword</div>
        <div class="dx-field-value">
          <DxTextBox value="UserPassword"/>
        </div>
      </div>

      <div class="dx-field" style="width:500px;">
        <div class="dx-field-label">UserDescription</div>
        <div class="dx-field-value">
          <DxTextBox value="UserDescription"/>
        </div>
      </div>
      
      <div class="dx-field" style="width:500px;">
        <div class="dx-field-label">UserLevel</div>
        <div class="dx-field-value">
          <DxTextBox value="UserLevel"/>
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