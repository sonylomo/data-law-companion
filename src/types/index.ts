// About Us

export type ProfileCardProps = {
  image: string;
  company: string;
  name: string;
};

export type CarousselProps = {
  image: string;
  title: string;
  name: string;
};

// Compliance Issues
export type CountrySelect = "rwanda" | "uganda" | "kenya";
export type CountryKey = {
  code: string;
  name: CountrySelect;
  flag: string;
};

export interface CountryInfo {
  description: string;
  tags: string[];
}

export interface DetailedComplianceIssuesChildren {
  id: number;
  icon: JSX.Element;
  title: string;
  country: Partial<Record<CountrySelect, CountryInfo>>;
}

export type DetailedComplianceIssuesData = {
  id: string;
  topic: string;
  altTopic: string;
  children: DetailedComplianceIssuesChildren[];
};

export type ComplianceIssuesData = {
  id: string;
  icon: JSX.Element;
  title: string;
  description: string;
};

// news

export type NewsData = {
  banner: string;
  title: string;
  id: number;
  subheading: string;
  body: string;
};
