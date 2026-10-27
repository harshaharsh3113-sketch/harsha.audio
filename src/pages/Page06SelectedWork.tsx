import PortfolioPage from '@/components/PortfolioPage';
import CaseStudy from '@/components/CaseStudy';

export default function Page06SelectedWork() {
  return (
    <PortfolioPage pageId="page-selectedwork" pageNumber="05 / 10" sectionLabel="06 / Selected Work">
      <div className="flex flex-col gap-3">
        <div className="break-avoid mb-2">
          <h2 className="headline-md text-white mb-1.5">
            Selected Productions
          </h2>
          <p className="body-text" style={{ fontSize: '11.5px' }}>
            A record of four productions across worship, classical, open-air and
            private event environments.
          </p>
        </div>

        <CaseStudy
          number="01"
          title="Church & Worship Production"
          role="FOH Sound Engineer / Live Sound"
          description="Live worship production involving a full band, choir, lead vocal, stage monitoring and live telecasting."
          specs={[
            { label: 'Console', value: 'Allen & Heath QU32' },
            { label: 'PA System', value: 'QSC LA112 line-array · QSC KS118 subwoofers · QSC K.2 stage monitors' },
            { label: 'Stage', value: 'Pearl drum kit · Hartke bass amp · Marshall guitar amp · Sennheiser XSW · Shure SM58' },
          ]}
          responsibilities={[
            'FOH Mixing',
            'Monitor Management',
            'Soundcheck',
            'Gain Structure',
            'EQ & Dynamics',
            'Feedback Management',
            'Stage Coordination',
            'Live Telecast Audio',
          ]}
          image="/image_02.jpg"
          imageAlt="image_02.jpg"
          imagePosition="left"
        />

        <CaseStudy
          number="02"
          title="Classical Live Production"
          location="Bengaluru, India"
          role="Live Sound / FOH"
          description="Classical live production combining vocals, traditional percussion and melodic instruments within a compact multi-monitor stage setup."
          specs={[
            { label: 'Inputs', value: 'Male Vocal · Flute · Veena · Mridangam · Nattuvangam · Playback' },
            { label: 'Console', value: 'Soundcraft Ui24R' },
            { label: 'FOH', value: 'JBL EON 915' },
            { label: 'Monitoring', value: 'Dedicated stage monitor mixes' },
          ]}
          responsibilities={[
            'FOH Mixing',
            'Gain Structure',
            'EQ & Dynamics',
            'Monitor Mixing',
            'Stage Patching',
            'Playback Routing',
            'Soundcheck',
            'Live Operation',
          ]}
          image="/image_03.jpg"
          imageAlt="image_03.jpg"
          imagePosition="right"
        />

        <CaseStudy
          number="03"
          title="Open-Air Live Production"
          location="Bengaluru, India"
          role="FOH Sound Engineer"
          description="Live university band production in an open-air environment with full-band stage setup and large audience."
          specs={[
            { label: 'Type', value: 'Open-Air Live Event' },
            { label: 'Console', value: 'Allen & Heath dLive' },
            { label: 'System', value: 'RCF line-array · JBL subwoofers · JBL stage monitors' },
            { label: 'Stage', value: 'Lead & backing vocals · Drums · Electric guitars · Bass · Additional live instruments' },
          ]}
          responsibilities={[
            'FOH Operation',
            'Stage Audio',
            'Soundcheck',
            'Live Mixing',
            'Monitor Coordination',
            'Live Troubleshooting',
            'Artist Coordination',
          ]}
          image="/image_04.jpg"
          imageAlt="image_04.jpg"
          imagePosition="left"
        />

        <CaseStudy
          number="04"
          title="Private Wedding Production"
          location="Hospet, India"
          role="Main FOH Sound Engineer"
          description="Full-band wedding production involving multiple vocalists, drums, guitars, keys and live stage monitoring."
          specs={[
            { label: 'Console', value: 'Allen & Heath QU32' },
            { label: 'System', value: 'QSC LA112 line-array · QSC KS118 subwoofers · QSC K.2 monitors' },
            { label: 'Control', value: 'FOH mixing from console · iPad remote control · Mac-based production support' },
          ]}
          responsibilities={[
            'FOH Mixing',
            'Artist Support',
            'Stage Audio',
            'Soundcheck',
            'Monitor Coordination',
            'Live Troubleshooting',
            'Production Coordination',
          ]}
          image="/image_05.jpg"
          imageAlt="image_05.jpg"
          imagePosition="right"
        />
      </div>
    </PortfolioPage>
  );
}
