import { useForm } from 'react-hook-form';

export type FormValues = {
  name: string;
  phone: string;
  email: string;
  contents: string;
  agree: boolean;
  zsfCode: string;
};

export const useContactForm = () => {
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
      const response = await fetch('https://mariakglobal.com/process.php', {
        method: 'POST',
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('서버 응답에 문제가 발생했습니다.');
      }

      const result = await response.json();

      reset();
    } catch (error) {
      console.error('폼 제출 중 오류가 발생했습니다:', error);
    }
  };

  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
  };
};
