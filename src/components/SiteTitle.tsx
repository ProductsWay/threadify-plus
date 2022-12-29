import { Title } from "solid-start";

export default function SiteTitle(props: { children: any }) {
  return <Title>{props.children} | Threadify+ Reader App</Title>;
}
