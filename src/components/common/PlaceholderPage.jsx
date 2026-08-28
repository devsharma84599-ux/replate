import Button from '../ui/Button'
import Card from '../ui/Card'
import PageContainer from '../layout/PageContainer'

function PlaceholderPage({ pageName }) {
  return (
    <PageContainer>
      <div className="rp-stack">
        <p className="rp-caption">RePlate</p>
        <h1 className="rp-heading-page">{pageName}</h1>
        <p className="rp-text-secondary">Frontend foundation placeholder</p>
        <Card>
          <div className="rp-stack">
            <p className="rp-body">
              Visual foundation is in place. Page design comes next.
            </p>
            <div className="rp-row">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
            </div>
          </div>
        </Card>
      </div>
    </PageContainer>
  )
}

export default PlaceholderPage
