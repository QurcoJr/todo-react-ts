interface Props {
  placeholder: string
}

export default function Textarea({ placeholder }: Props) {
  return <textarea className="poppins-semibold" placeholder={placeholder} />
}
