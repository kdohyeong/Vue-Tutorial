// Report Editor -> Report 설정 -> + "ADD ROW"
// https://js.devexpress.com/Demos/WidgetsGallery/Demo/Validation/Overview/Vue/Light/

 <template>
 
 <div class="form">
    <div class="dx-fieldset">

      <div class="dx-field" style="width:500px;">
        <div class="dx-field-label">reportTagId</div>
        <div class="dx-field-value">
          <DxTextBox value="reportTagId"/>
        </div>
      </div>

      <div class="dx-field" style="width:500px;">
        <div class="dx-field-label">ReportGroup</div>
        <div class="dx-field-value">
          <DxTextBox value="ReportGroup">
           </DxTextBox>
        </div>
      </div>

      <div class="dx-field" style="width:500px;">
        <div class="dx-field-label">ReportName</div>
        <div class="dx-field-value">
          <DxTextBox value="ReportName"/>
        </div>
      </div>

      <div class="dx-field" style="width:500px;">
        <div class="dx-field-label">ReportRegend</div>
        <div class="dx-field-value">
          <DxTextBox value="ReportRegend"/>
        </div>
      </div>
      
      <div class="dx-field" style="width:500px;">
        <div class="dx-field-label">ReportPeriod</div>
        <div class="dx-field-value">
          <DxTextBox value="ReportPeriod"/>
        </div>
      </div>
      
      <div class="dx-field" style="width:500px;">
        <div class="dx-field-label">reportName</div>
        <div class="dx-field-value">
          <DxTextBox value="reportName"/>
        </div>
      </div>

      <div class="dx-field" style="width:500px;">
        <div class="dx-field-label">TagId</div>
        <div class="dx-field-value">
          <DxTextBox value="TagId"/>
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