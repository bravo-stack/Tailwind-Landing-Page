import CompanyLinks from "./CompanyLinks"
import ProductLinks from "./ProductLinks"
import ServiceLinks from "./ServiceLinks"

function FooterLinks() {
    

    return(
        // Footer link containing tag
        <div className="flex gap-28 md:gap-64 lg:gap-32 px-4 lg:px-auto xl:mr-auto">
            <CompanyLinks />
            <ProductLinks />
            <ServiceLinks />
        </div>
    )
}

export default FooterLinks