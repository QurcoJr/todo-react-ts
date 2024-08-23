interface Props extends React.InputHTMLAttributes<HTMLTextAreaElement> {
  placeholder: string
}

export default function Textarea({ placeholder, ...other }: Props) {
  return (
    <textarea
      className="poppins-semibold"
      placeholder={placeholder}
      {...other}
    />
  )
}
