import React from 'react'
import { toastDefaults, toastError, toastSuccess } from '../../utils/ToastUtil'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { IPost } from '../../types/Post'
import { savePost } from '../../utils/apis/post'
import { useNavigate } from 'react-router-dom'

const PostEdit: React.FC = () => {

  const navigate = useNavigate()

  const submit = async (values: IPost) => {
    console.log(values)
    try {
      const result = await savePost(values)
      toastSuccess('⚽ 등록 성공')
      navigate(`/post/${result.postNo}`)
    } catch (error) {
      toastError('🚨 등록 실패 🚨')
    }

  }

  return (
    <div>
      <Formik
        initialValues={{ title: '', description: ''}}
        onSubmit={submit}
        validationSchema={Yup.object().shape({
          title: Yup.string()
            .required('제목을 입력하세요.')
            .max(100, '100자 이하로 입력해주세요.'),
          description: Yup.string()
            .required('내용을 입력하세요')
            .min(6, "6자이상 입력하세요"),
        })}
      >
      {
        ({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting
        }) => (
          <form style={{ display: 'inline-grid' }} onSubmit={handleSubmit}>
            <input 
              type="text" 
              id="title" 
              name="title"
              value={values.title}
              onChange={handleChange} 
              onBlur={handleBlur}
            />
            { touched.title && errors.title && <p>{errors.title}</p> }
            <textarea 
              id="title"
              name="description"
              value={values.description}
              onChange={handleChange} 
              onBlur={handleBlur}
            />
            { touched.description && errors.description && <p>{errors.description}</p> }
            <button type="submit" disabled={isSubmitting}>제출</button>
          </form>
        )
      }
      </Formik>
    </div>
  )
}

export default PostEdit