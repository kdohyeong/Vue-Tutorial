// Project Editor 
// https://js.devexpress.com/Demos/WidgetsGallery/Demo/TextBox/Overview/Vue/Light/

 <template>
 
 <div class="form">
    <div class="dx-fieldset">

      <div class="dx-field" style="width:500px;">
        <div class="dx-field-label">프로젝트 ID</div>
        <div class="dx-field-value">
          <DxTextBox value="1"/>
        </div>
      </div>

      <div class="dx-field" style="width:500px;">
        <div class="dx-field-label">프로젝트 이름</div>
        <div class="dx-field-value">
          <DxTextBox value="START_PROJECT"/>
        </div>
      </div>

      <div class="dx-field" style="width:500px;">
        <div class="dx-field-label">고객명</div>
        <div class="dx-field-value">
          <DxTextBox value="TITECH"/>
        </div>
      </div>

      <div class="dx-field" style="width:500px;">
        <div class="dx-field-label">관리자</div>
        <div class="dx-field-value">
          <DxTextBox value="데모"/>
        </div>
      </div>

      <div class="dx-field" style="width:500px;">
        <div class="dx-field-label">프로젝트 설명</div>
        <div class="dx-field-value">
          <DxTextBox value="데모 프로젝트"/>
        </div>
      </div>  
    
    </div>
 </div>


</template>
<script>
import DxTextBox from 'devextreme-vue/text-box';

export default {
  components: {
    DxTextBox
  },
};
</script>