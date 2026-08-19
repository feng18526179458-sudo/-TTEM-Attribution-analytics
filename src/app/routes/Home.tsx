import { KsButton, KsText } from '@byted-keystone/react';
import { PageHeader } from '../components/page-header';
import { TtamActionBar } from '../components/ttam-action-bar';

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <PageHeader
        title="Page title"
        description="What's happening with your account today."
        actions={
          <>
            <KsButton size="md" variant="default">Button</KsButton>
            <KsButton size="md" variant="primary">Button</KsButton>
          </>
        }
      />
      <div className="flex-1">{/* Content goes here */}</div>
      <TtamActionBar
        leftActions={
          <>
            <KsButton size="md" variant="default">Cancel</KsButton>
            <KsText variant="labelSm" color="neutral">Neutral message</KsText>
          </>
        }
        rightActions={
          <>
            <KsButton size="md" variant="default">Back</KsButton>
            <KsButton size="md" variant="primary">Next</KsButton>
          </>
        }
      />
    </div>
  );
}
