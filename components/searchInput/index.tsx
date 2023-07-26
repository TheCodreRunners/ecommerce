import { Icon, IInputProps, Input } from 'native-base'

import { AntDesign } from '@expo/vector-icons'

interface Props {
  placeholder?: string
  inputProps?: IInputProps
}

export default function SearchInput({
  placeholder,
  inputProps,
}: Props) {
  return (
    <Input
      placeholder={placeholder}
      borderRadius={'30px'}
      h={'50px'}
      fontSize={'15px'}
      bgColor={'#F3F4F5'}
      color={'#AAAAAA'}
      borderWidth={0}
      {...inputProps}
      InputLeftElement={
        <Icon
          as={<AntDesign name="search1" />}
          color={'#000000'}
          size={6}
          ml={5}
        />
      }
    />
  )
}
