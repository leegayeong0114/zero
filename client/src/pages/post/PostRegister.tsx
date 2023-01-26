import React, { useEffect } from 'react'
import { toastDefaults, toastError, toastSuccess } from '../../utils/ToastUtil'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { IPost } from '../../types/Post'
import { getPostOne, savePost } from '../../utils/apis/post'
import { useNavigate, useParams } from 'react-router-dom'

interface IProps {
  isUpdate: boolean
}

let initialValues: IPost = {
  title: '',
  description: ''
}

const PostRegister: React.FC<IProps> = ({ isUpdate }) => {


  const navigate = useNavigate()
  const { postNo } = useParams()

  useEffect(() => {
    console.log(isUpdate ? '수정중' : '처음')
    if(isUpdate) getPostInfo()
  }, [])

  const getPostInfo = async () => {
    const data = await getPostOne(Number(postNo))
    console.log({...data})
    initialValues = {...data}
    console.log(initialValues)
  }

  const submit = async (values: IPost) => {

    const data = {...values}
    if(isUpdate) data.postNo = Number(postNo)

    try {
      const result = await savePost(data)
      const redirectPostNo = isUpdate ? postNo : result.postNo
      toastSuccess('⚽ 등록 성공')
      navigate(`/post/${redirectPostNo}`)
    } catch (error) {
      toastError('🚨 등록 실패 🚨')
    }
  }

  return (
    <div>
      <Formik
        initialValues={initialValues}
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

export default PostRegister