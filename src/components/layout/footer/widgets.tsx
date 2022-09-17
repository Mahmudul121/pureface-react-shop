import Container from "@components/ui/container";
// import WidgetLink from "@components/widgets/widget-link";
// import WidgetSocial from "@components/widgets/widget-social";
// import WidgetContact from "@components/widgets/widget-contact";

interface WidgetsProps {
  widgets: {
    id: number;
    help: string;
    pureFace:{
      widgetTitle?: string;
      lists: {
        id: string;
        path?: string;
        title: string;
        icon?: any;
      }
    };
    lists: any;
  };
}
 
const Widgets: React.FC<WidgetsProps> = () => {
  return (
    <div className="bg-gray-400 text-white pt-8">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 md:gap-9 lg:gap-x-8 xl:gap-5 pb-4">
          {/* <WidgetLink data={widgets.pureFace} className='ads' key='pureface-widget-link' />
          <WidgetSocial />
          <WidgetLink data={widgets.help} key='help-widget-link' />
          <WidgetLink data={widgets.quickLinks} key='quick-links-widget-link' />
          <WidgetLink data={widgets.topCategories} key='top-categories-widget-link' /> */}
          
          {/*{widgets.map((widget, index) => (
            <WidgetLink data={widget} key={`widget-link-${index}`} />
          ))}*/}
        </div>
      </Container>
    </div>
  );
};

export default Widgets;
