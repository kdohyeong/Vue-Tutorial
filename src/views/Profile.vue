// 우측 상단 test -> 사용자 정보
// https://js.devexpress.com/Demos/WidgetsGallery/Demo/Validation/Overview/Vue/Light/

 <template>
 
 <div class="form">
    <div class="dx-fieldset">
      
      <div class="dx-fieldset-header">Credentials</div>
      <div class="dx-field" style="width:500px;">
        <div class="dx-field-label">현재 비밀번호</div>
        <div class="dx-field-value">
          <DxTextBox value=""/>
        </div>
      </div>

      <div class="dx-field" style="width:500px;">
        <div class="dx-field-label">새 비밀번호</div>
        <div class="dx-field-value">
          <DxTextBox
            v-model="password"
            mode="password"
          >
            <DxValidator>
                <DxRequiredRule message="Password is required"/>
            </DxValidator>
          </DxTextBox>
        </div>
      </div>

       <div class="dx-field" style="width:500px;">
        <div class="dx-field-label">새 비밀번호 확인</div>
        <div class="dx-field-value">
          <DxTextBox mode="password">
            <DxValidator>
              <DxRequiredRule message="Confirm Password is required"/>
              <DxCompareRule
                :comparison-target="passwordComparison"
                message="Password and Confirm Password do not match"
              />
            </DxValidator>
          </DxTextBox>
        </div>
       </div>

    <DxButton
        id="button"
        :use-submit-behavior="true"
        text="변경"
        type="success"
        style="width:140px;
               margin-left:200px;
               margin-right:20px;"

      />
      <DxButton
        id="button"
        :use-submit-behavior="true"
        text="취소"
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
  DxCompareRule,
} from 'devextreme-vue/validator';

export default {
  components: {
    DxTextBox,
    DxButton,
    DxValidator,
    DxRequiredRule,
    DxCompareRule,
  },
  data() {
    return {
      password: '',
    };
  },
  methods: {
    passwordComparison() {
      return this.password;
    },
  }
};
</script>