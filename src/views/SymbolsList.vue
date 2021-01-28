// Graphic Editor -> 심볼 그룹 설정 -> "+"
// https://js.devexpress.com/Demos/WidgetsGallery/Demo/Validation/Overview/Vue/Light/

 <template>
 
 <div class="form">
    <div class="dx-fieldset">

      <div class="dx-field" style="width:500px;">
        <div class="dx-field-label">SymbolId</div>
        <div class="dx-field-value">
          <DxTextBox value="SymbolId"/>
        </div>
      </div>

      <div class="dx-field" style="width:500px;">
        <div class="dx-field-label">SymbolType</div>
        <div class="dx-field-value">
          <DxTextBox value="SymbolType"/>
        </div>
      </div>

      <div class="dx-field" style="width:500px;">
        <div class="dx-field-label">SymbolName</div>
        <div class="dx-field-value">
          <DxTextBox value="SymbolName">
           </DxTextBox>
        </div>
      </div>

      <div class="dx-field" style="width:500px;">
        <div class="dx-field-label">symbolImage</div>
        <div class="dx-field-value">
        <DxSelectBox :data-source="countries">
        </DxSelectBox>
        </div>
    </div>

      <div class="dx-field" style="width:500px;">
        <div class="dx-field-label">Group</div>
        <div class="dx-field-value">
          <DxTextBox value="Group"/>
        </div>
      </div>  

    <div class="dx-field" style="width:500px;">
        <div class="dx-field-label">ALARM-HH</div>
        <div class="dx-field-value">
        <DxSelectBox :data-source="countries">
        </DxSelectBox>
        </div>
    </div>

     <div class="dx-field" style="width:500px;">
        <div class="dx-field-label">ALARM-H</div>
        <div class="dx-field-value">
        <DxSelectBox :data-source="countries">
        </DxSelectBox>
        </div>
    </div>      

     <div class="dx-field" style="width:500px;">
        <div class="dx-field-label">ALARM-L</div>
        <div class="dx-field-value">
        <DxSelectBox :data-source="countries">
        </DxSelectBox>
        </div>
    </div>      

     <div class="dx-field" style="width:500px;">
        <div class="dx-field-label">ALARM-LL</div>
        <div class="dx-field-value">
        <DxSelectBox :data-source="countries">
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
import DxSelectBox from 'devextreme-vue/select-box';
import DxButton from 'devextreme-vue/button';

export default {
  components: {
    DxTextBox,
    DxSelectBox,
    DxButton,
  },
};
</script>