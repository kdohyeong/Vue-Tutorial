// Trend Editor -> 트렌드 페이지 설정 -> "ADD ROW"
// https://js.devexpress.com/Demos/WidgetsGallery/Demo/Validation/Overview/Vue/Light/

 <template>
 
 <div class="form">
    <div class="dx-fieldset">

      <div class="dx-field" style="width:500px;">
        <div class="dx-field-label">trendPageId</div>
        <div class="dx-field-value">
          <DxTextBox value="trendPageId"/>
        </div>
      </div>

      <div class="dx-field" style="width:500px;">
        <div class="dx-field-label">trendPageName</div>
        <div class="dx-field-value">
          <DxTextBox value="trendPageName">
           </DxTextBox>
        </div>
      </div>

      <div class="dx-field" style="width:500px;">
        <div class="dx-field-label">trendPageDescription</div>
        <div class="dx-field-value">
          <DxTextBox value="trendPageDescription"/>
        </div>
      </div>

      <div class="dx-field" style="width:500px;">
        <div class="dx-field-label">trendGroupId</div>
        <div class="dx-field-value">
          <DxTextBox value="trendGroupId"/>
        </div>
      </div>
      
      <div class="dx-field" style="width:500px;">
        <div class="dx-field-label">trendType *</div>
        <div class="dx-field-value">
            <DxSelectBox :data-source="countries">
                <DxValidator>
                <DxRequiredRule message="trendType is required"/>
                </DxValidator>
            </DxSelectBox>
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
import DxSelectBox from 'devextreme-vue/select-box';
import {
  DxValidator,
  DxRequiredRule,
} from 'devextreme-vue/validator';


export default {
  components: {
    DxTextBox,
    DxButton,
    DxSelectBox,
    DxValidator,
    DxRequiredRule,
  },
};
</script>