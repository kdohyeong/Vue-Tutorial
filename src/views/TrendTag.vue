// Trend Editor -> 트렌드 태그 설정 -> "ADD ROW"
// https://js.devexpress.com/Demos/WidgetsGallery/Demo/Validation/Overview/Vue/Light/

 <template>
 
 <div class="form">
    <div class="dx-fieldset">

      <div class="dx-field" style="width:500px;">
        <div class="dx-field-label">trendTagId</div>
        <div class="dx-field-value">
          <DxTextBox value="trendTagId"/>
        </div>
      </div>

      <div class="dx-field" style="width:500px;">
        <div class="dx-field-label">trendRegend</div>
        <div class="dx-field-value">
          <DxTextBox value="trendRegend">
           </DxTextBox>
        </div>
      </div>

      <div class="dx-field" style="width:500px;">
        <div class="dx-field-label">trendRangeMin</div>
        <div class="dx-field-value">
          <DxTextBox value="trendRangeMin"/>
        </div>
      </div>

      <div class="dx-field" style="width:500px;">
        <div class="dx-field-label">trendRangeMax</div>
        <div class="dx-field-value">
          <DxTextBox value="trendRangeMax"/>
        </div>
      </div>

      <div class="dx-field" style="width:500px;">
        <div class="dx-field-label">trendPeriod</div>
        <div class="dx-field-value">
          <DxTextBox value="trendPeriod"/>
        </div>
      </div>

      <div class="dx-field" style="width:500px;">
        <div class="dx-field-label">trendName</div>
        <div class="dx-field-value">
          <DxTextBox value="trendName"/>
        </div>
      </div>
      
      <div class="dx-field" style="width:500px;">
        <div class="dx-field-label">trendGroup</div>
        <div class="dx-field-value">
          <DxTextBox value="trendGroup"/>
        </div>
      </div>

      <div class="dx-field" style="width:500px;">
        <div class="dx-field-label">tagId *</div>
        <div class="dx-field-value">
            <DxSelectBox :data-source="countries">
                <DxValidator>
                <DxRequiredRule message="tagId is required"/>
                </DxValidator>
            </DxSelectBox>
        </div>
      </div>

      <div class="dx-field" style="width:500px;">
        <div class="dx-field-label">trendFormat</div>
        <div class="dx-field-value">
          <DxTextBox value="trendFormat"/>
        </div>
      </div>

      <div class="dx-field" style="width:500px;">
        <div class="dx-field-label">trendChartType</div>
        <div class="dx-field-value">
          <DxTextBox value="trendChartType"/>
        </div>
      </div>

      <div class="dx-field" style="width:500px;">
        <div class="dx-field-label">trendTimestamp</div>
        <div class="dx-field-value">
          <DxTextBox value="trendTimestamp"/>
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