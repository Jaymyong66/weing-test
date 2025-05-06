import { Inner } from '@/components/Inner';
import { Size } from '@/components/Size';
import { Title } from '@/components/Title';

import styles from './Section7.module.scss';

const Section7 = () => {
  return (
    <section className={styles.Section7}>
      <Inner>
        <Size>
          <Title title='교육문의' subTitle='상담문의 작성하기' />
        </Size>
        <div className={styles.ContactFormWrapper}>
          <div className={styles.Right}>
            <div className={styles.ContactForm}>
              <form
                name='contact'
                id='contact'
                method='POST'
                action='https://mariakglobal.com/process.php'
              >
                <table className={styles.ContactFormTable}>
                  <caption>상담문의</caption>
                  <colgroup>
                    <col width='*' />
                    <col width='20px' />
                    <col width='*' />
                  </colgroup>
                  <tbody>
                    <tr>
                      <td>
                        <em>
                          이름{' '}
                          <span className={styles.Required}>
                            필수입력 <span>*</span>
                          </span>
                        </em>
                        <input
                          id='name'
                          type='text'
                          name='name'
                          placeholder='이름을 입력해주세요'
                        />
                      </td>
                      <td className={styles.None}>여백</td>
                      <td>
                        <em>
                          전화번호{' '}
                          <span className={styles.Required}>
                            필수입력 <span>*</span>
                          </span>
                        </em>
                        <input
                          id='phone'
                          type='text'
                          name='phone'
                          placeholder='전화번호를 입력해주세요'
                        />
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={3}>
                        <em>
                          이메일{' '}
                          <span className={styles.Required}>
                            필수입력 <span>*</span>
                          </span>
                        </em>
                        <input
                          id='email'
                          type='text'
                          name='email'
                          placeholder='이메일을 입력해주세요'
                        />
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={3}>
                        <div className={styles.MessageArea}>
                          <em>
                            문의 내용
                            <span className={styles.Required}>
                              필수입력 <span>*</span>
                            </span>
                          </em>
                          <textarea
                            id='contents'
                            name='contents'
                            placeholder='문의 내용을 적어주세요'
                          />
                        </div>
                        <div className={styles.CheckList}>
                          <div className={styles.CheckBox}>
                            <input type='checkbox' id='agree' name='agree' />
                            <label htmlFor='agree'>
                              개인정보 수집방침에 동의합니다.(필수)
                            </label>
                          </div>
                        </div>
                        <div className={styles.Spam}>
                          <em>스팸방지코드</em>
                          <div className={styles.SpamContent}>
                            <img
                              src='/images/captcha1.jpg'
                              alt='스팸코드'
                              id='captImg'
                            />
                            <input
                              type='button'
                              value='새로고침'
                              className={styles.SpamRefresh}
                            />
                            <input
                              type='text'
                              name='zsfCode'
                              id='zsfCode'
                              className={styles.ZsfCode}
                              maxLength={6}
                              autoComplete='off'
                            />
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className={styles.SubmitButtonWrapper}>
                  <button
                    type='submit'
                    className={styles.SubmitButton}
                    onClick={(e) => {
                      e.preventDefault();
                      console.log('send');
                    }}
                  >
                    {'Send'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Inner>
    </section>
  );
};

export default Section7;
