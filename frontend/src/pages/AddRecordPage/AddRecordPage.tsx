import { useParams } from 'react-router';
import { HeroSection } from '../../components/HeroSection/HeroSection';
import { AddCoffeeForm } from '../../components/forms/AddCoffeeForm/AddCoffeeForm';
import { AddBrewForm } from '../../components/forms/AddBrewForm/AddBrewForm';
import './AddRecordPage.scss';

const FORM_MAP: Record<string, React.FC> = {
  coffee: AddCoffeeForm,
  brew: AddBrewForm,
};

const TITLE_MAP: Record<string, string> = {
  coffee: 'Nová káva',
  brew: 'Nová příprava',
};

export const AddRecordPage = () => {
  const { type } = useParams<{ type: string }>();
  const title = type ? TITLE_MAP[type] : 'Nový záznam';
  const FormComponent = type ? FORM_MAP[type] : null;
  if (!FormComponent) return <p>Neznámý typ záznamu</p>;

  return (
    <div className="addRecordPage">
      <HeroSection title={title} variant="white" />
      <FormComponent />
    </div>
  );
};
