// Point 속성 편집 -> "편집 버튼"
// https://js.devexpress.com/Demos/WidgetsGallery/Demo/Validation/Overview/Vue/Light/

 <template>
 
 <div class="form">
    <div class="dx-fieldset">

      <div class="dx-field" style="width:500px;">
        <div class="dx-field-label">id</div>
        <div class="dx-field-value">
          <DxTextBox value="id"/>
        </div>
      </div>

      <div class="dx-field" style="width:500px;">
        <div class="dx-field-label">tagName</div>
        <div class="dx-field-value">
          <DxTextBox value="tagName">
           </DxTextBox>
        </div>
      </div>

      <div class="dx-field" style="width:500px;">
        <div class="dx-field-label">tagType</div>
        <div class="dx-field-value">
          <DxTextBox value="tagType"/>
        </div>
      </div>

      <div class="dx-field" style="width:500px;">
        <div class="dx-field-label">tagUnit</div>
        <div class="dx-field-value">
          <DxTextBox value="tagUnit"/>
        </div>
      </div>
      
      <div class="dx-field" style="width:500px;">
        <div class="dx-field-label">tagFormat</div>
        <div class="dx-field-value">
          <DxTextBox value="tagFormat"/>
        </div>
      </div>
      
      <div class="dx-field" style="width:500px;">
        <div class="dx-field-label">TagDescription</div>
        <div class="dx-field-value">
          <DxTextBox value="TagDescription"/>
        </div>
      </div>

      <div class="dx-field" style="width:500px;">
        <div class="dx-field-label">디바이스 ID</div>
        <div class="dx-field-value">
          <DxTextBox value="디바이스 ID"/>
        </div>
      </div>

      <div class="dx-field" style="width:500px;">
        <div class="dx-field-label">Tagid Status</div>
        <div class="dx-field-value">
          <DxTextBox value="Tagid Status"/>
        </div>
      </div>

      <div class="dx-field" style="width:500px;">
        <div class="dx-field-label">Tagid Value</div>
        <div class="dx-field-value">
          <DxTextBox value="Tagid Value"/>
        </div>
      </div>
      
      <div class="dx-field" style="width:500px;">
        <div class="dx-field-label">TAGID</div>
        <div class="dx-field-value">
          <DxTextBox value="TAGID"/>
        </div>
      </div>
       
      <div class="dx-field" style="width:500px;">
        <div class="dx-field-label">알람 사용</div>
        <div class="dx-field-value">
          <DxCheckBox :value="false"/>
        </div>
      </div>

      <div class="dx-field" style="width:500px;">
        <div class="dx-field-label">로그 사용</div>
        <div class="dx-field-value">
          <DxCheckBox :value="false"/>
        </div>
      </div>

      <div class="dx-field" style="width:500px;">
        <div class="dx-field-label">실태그</div>
        <div class="dx-field-value">
          <DxCheckBox :value="false"/>
        </div>
      </div>

      <div class="dx-field" style="width:500px;">
        <div class="dx-field-label">보고서 사용</div>
        <div class="dx-field-value">
          <DxCheckBox :value="false"/>
        </div>
      </div>

      <div class="dx-field" style="width:500px;">
        <div class="dx-field-label">트렌드</div>
        <div class="dx-field-value">
          <DxCheckBox :value="false"/>
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