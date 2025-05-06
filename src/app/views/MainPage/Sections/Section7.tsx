import { useForm } from 'react-hook-form';

import { Inner } from '@/components/Inner';
import { Size } from '@/components/Size';
import { Title } from '@/components/Title';

import styles from './Section7.module.scss';

type FormValues = {
  name: string;
  phone: string;
  email: string;
  contents: string;
  agree: boolean;
  zsfCode: string;
};

const Section7 = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      contents: '',
      agree: false,
      zsfCode: '',
    },
    mode: 'onChange',
  });

  const onSubmit = async (data: FormValues) => {
    try {
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, value.toString());
      });

      const response = await fetch('https://mariakglobal.com/process.php', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('서버 응답에 문제가 발생했습니다.');
      }

      const result = await response.json();

      reset();
    } catch (error) {
      console.error('폼 제출 중 오류 발생:', error);
    }
  };

  // const refreshCaptcha = () => {
  //   const captImg = document.getElementById('captImg') as HTMLImageElement;
  //   if (captImg) {
  //     captImg.src = `/images/captcha1.jpg?t=${new Date().getTime()}`;
  //   }
  // };

  return (
    <section className={styles.Section7}>
      <Inner>
        <Size>
          <Title
            title='교육문의'
            subTitle='상담문의 작성하기'
            className={styles.Title}
          />
        </Size>
        <div className={styles.ContactFormWrapper}>
          <div className={styles.Right}>
            <div className={styles.ContactForm}>
              <form
                name='contact'
                id='contact'
                onSubmit={handleSubmit(onSubmit)}
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
                          placeholder='이름을 입력해주세요'
                          className={errors.name ? styles.InputError : ''}
                          {...register('name', {
                            required: true,
                            maxLength: 10,
                          })}
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
                          placeholder='전화번호를 입력해주세요'
                          className={errors.phone ? styles.InputError : ''}
                          {...register('phone', {
                            required: true,
                            pattern: /^[0-9]{2,3}-[0-9]{3,4}-[0-9]{4}$/,
                          })}
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
                          placeholder='이메일을 입력해주세요'
                          className={errors.email ? styles.InputError : ''}
                          {...register('email', {
                            required: true,
                            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          })}
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
                            placeholder='문의 내용을 적어주세요'
                            className={errors.contents ? styles.InputError : ''}
                            {...register('contents', {
                              required: true,
                              minLength: 10,
                            })}
                          />
                        </div>
                        <div className={styles.CheckList}>
                          <div className={styles.CheckBox}>
                            <input
                              type='checkbox'
                              id='agree'
                              className={errors.agree ? styles.CheckError : ''}
                              {...register('agree', {
                                required: true,
                              })}
                            />
                            <label
                              htmlFor='agree'
                              className={errors.agree ? styles.LabelError : ''}
                            >
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
                              // onClick={refreshCaptcha}
                            />
                            <input
                              type='text'
                              id='zsfCode'
                              className={`${styles.ZsfCode} ${errors.zsfCode ? styles.InputError : ''}`}
                              maxLength={6}
                              autoComplete='off'
                              {...register('zsfCode', {
                                required: true,
                                minLength: 6,
                                maxLength: 6,
                              })}
                            />
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className={styles.SubmitButtonWrapper}>
                  <button type='submit' className={styles.SubmitButton}>
                    Send
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
