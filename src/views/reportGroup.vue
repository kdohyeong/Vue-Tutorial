// Report Editor -> 양식 지정 -> + "ADD ROW"
// https://js.devexpress.com/Demos/WidgetsGallery/Demo/Validation/Overview/Vue/Light/

 <template>
 
 <div class="form">
    <div class="dx-fieldset">

      <div class="dx-field" style="width:500px;">
        <div class="dx-field-label">reportGroupId</div>
        <div class="dx-field-value">
          <DxTextBox value="reportGroupId"/>
        </div>
      </div>

      <div class="dx-field" style="width:500px;">
        <div class="dx-field-label">ReportGroupName</div>
        <div class="dx-field-value">
          <DxTextBox value="ReportGroupName">
           </DxTextBox>
        </div>
      </div>

      <div class="dx-field" style="width:500px;">
        <div class="dx-field-label">ReportGroupPeriod</div>
        <div class="dx-field-value">
          <DxTextBox value="ReportGroupPeriod"/>
        </div>
      </div>

      <div class="dx-field" style="width:500px;">
        <div class="dx-field-label">ReportGroupTimestamp</div>
        <div class="dx-field-value">
          <DxTextBox value="ReportGroupTimestamp"/>
        </div>
      </div>
      
      <div class="dx-field" style="width:500px;">
        <div class="dx-field-label">ReportGroupWeek</div>
        <div class="dx-field-value">
          <DxTextBox value="ReportGroupWeek"/>
        </div>
      </div>
      
      <div class="dx-field" style="width:500px;">
        <div class="dx-field-label">ReportGroupDay</div>
        <div class="dx-field-value">
          <DxTextBox value="ReportGroupDay"/>
        </div>
      </div>

      <div class="dx-field" style="width:500px;">
        <div class="dx-field-label">ReportGroupHour</div>
        <div class="dx-field-value">
          <DxTextBox value="ReportGroupHour"/>
        </div>
      </div>

      <div class="dx-field" style="width:500px;">
        <div class="dx-field-label">ReportGroupDesc</div>
        <div class="dx-field-value">
          <DxTextBox value="ReportGroupDesc"/>
        </div>
      </div>

      <div class="dx-field" style="width:500px;">
        <div class="dx-field-label">ReportGroupType</div>
        <div class="dx-field-value">
          <DxTextBox value="ReportGroupType"/>
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