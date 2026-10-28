import { BAND_SIZES, PLANS, SIZE_RANGES } from '../../data/catalog'
import { isIncludedInPlan } from '../../lib/catalog'
import { useCatalog } from '../../state/useCatalog'
import type { Product } from '../../types/catalog'
import { Button } from '../ui/Button'
import { ColorSwatchPicker } from '../ui/ColorSwatchPicker'
import { SizePicker } from '../ui/SizePicker'
import { PriceSummary } from './PriceSummary'

interface PurchasePanelProps {
  product: Product
  isFeatured?: boolean
}

/** Price, color, size and add-to-cart controls for a single band. */
export function PurchasePanel({ product, isFeatured }: PurchasePanelProps) {
  const { state, actions } = useCatalog()
  const { mode, plan } = state
  const selection = state.selections[product.id]
  const color = product.colors[selection.colorIndex]
  const needsUpgrade = mode === 'membership' && !isIncludedInPlan(product, plan)

  return (
    <div className="mt-5 rounded-panel border border-panel-line bg-canvas p-4">
      <div className="flex items-start justify-between gap-3">
        <PriceSummary product={product} mode={mode} plan={plan} isFeatured={isFeatured} />
        <div className="text-right">
          <ColorSwatchPicker
            label={`${product.name} color`}
            colors={product.colors}
            selectedIndex={selection.colorIndex}
            onChange={(index) => actions.setColor(product.id, index)}
          />
          <p className="mt-1 text-[13px] text-muted">{color.name}</p>
        </div>
      </div>

      <div className="mt-4 flex items-center gap-2">
        <SizePicker
          sizes={BAND_SIZES}
          value={selection.size}
          hints={SIZE_RANGES}
          onChange={(size) => actions.setSize(product.id, size)}
        />
        {needsUpgrade ? (
          <Button variant="outlineSoft" className="flex-1" onClick={() => actions.selectPlan(product.minPlan)}>
            Switch to {PLANS[product.minPlan].name}
          </Button>
        ) : (
          <Button className="flex-1" onClick={actions.addToCart}>
            Add {product.name} to cart
          </Button>
        )}
      </div>

      <p className="mt-2 text-[12px] text-muted">
        Size {selection.size} fits wrists {SIZE_RANGES[selection.size]}
      </p>
    </div>
  )
}
