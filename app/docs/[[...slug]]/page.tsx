import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

export default function DocsArticlePage({ params }: Params) {
    return (
      <div>Docs Article for {params.slug}</div>
    )
  }
  