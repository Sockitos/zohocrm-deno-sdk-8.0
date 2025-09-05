// core file
import * as Apis from "./core/com/zoho/crm/api/apis/import_apis.ts";
import * as AppointmentPreference from "./core/com/zoho/crm/api/appointment_preference/import_appointment_preference.ts";
import * as AssignmentRules from "./core/com/zoho/crm/api/assignment_rules/import_assignment_rules.ts";
import * as AssociateEmail from "./core/com/zoho/crm/api/associate_email/import_associate_email.ts";
import * as Attachments from "./core/com/zoho/crm/api/attachments/import_attachments.ts";
import * as AuditLogExport from "./core/com/zoho/crm/api/audit_log_export/import_audit_log_export.ts";
import * as AvailableCurrencies from "./core/com/zoho/crm/api/available_currencies/import_available_currencies.ts";
import * as Backup from "./core/com/zoho/crm/api/backup/import_backup.ts";
import * as Blueprint from "./core/com/zoho/crm/api/blueprint/import_blueprint.ts";
import * as BulkRead from "./core/com/zoho/crm/api/bulk_read/import_bulk_read.ts";
import * as BulkWrite from "./core/com/zoho/crm/api/bulk_write/import_bulk_write.ts";
import * as BusinessHours from "./core/com/zoho/crm/api/business_hours/import_business_hours.ts";
import * as Cadences from "./core/com/zoho/crm/api/cadences/import_cadences.ts";
import * as CadencesExecution from "./core/com/zoho/crm/api/cadences_execution/import_cadences_execution.ts";
import * as CallPreferences from "./core/com/zoho/crm/api/call_preferences/import_call_preferences.ts";
import * as CancelMeetings from "./core/com/zoho/crm/api/cancel_meetings/import_cancel_meetings.ts";
import * as ChangeOwner from "./core/com/zoho/crm/api/change_owner/import_change_owner.ts";
import * as ContactRoles from "./core/com/zoho/crm/api/contact_roles/import_contact_roles.ts";
import * as ConversionOption from "./core/com/zoho/crm/api/conversion_option/import_conversion_option.ts";
import * as ConvertLead from "./core/com/zoho/crm/api/convert_lead/import_convert_lead.ts";
import * as Coql from "./core/com/zoho/crm/api/coql/import_coql.ts";
import * as Currencies from "./core/com/zoho/crm/api/currencies/import_currencies.ts";
import * as CustomViews from "./core/com/zoho/crm/api/custom_views/import_custom_views.ts";
import * as DataSharing from "./core/com/zoho/crm/api/data_sharing/import_data_sharing.ts";
import * as DealContactRoles from "./core/com/zoho/crm/api/deal_contact_roles/import_deal_contact_roles.ts";
import * as Definition from "./core/com/zoho/crm/api/definition/import_definition.ts";
import * as Digest from "./core/com/zoho/crm/api/digest/import_digest.ts";
import * as DownloadAttachments from "./core/com/zoho/crm/api/download_attachments/import_download_attachments.ts";
import * as DownloadInlineImages from "./core/com/zoho/crm/api/download_inline_images/import_download_inline_images.ts";
import * as DuplicateCheckPreference from "./core/com/zoho/crm/api/duplicate_check_preference/import_duplicate_check_preference.ts";
import * as EmailCompose from "./core/com/zoho/crm/api/email_compose/import_email_compose.ts";
import * as EmailComposeMeta from "./core/com/zoho/crm/api/email_compose_meta/import_email_compose_meta.ts";
import * as EmailConfigurationOptions from "./core/com/zoho/crm/api/email_configuration_options/import_email_configuration_options.ts";
import * as EmailDrafts from "./core/com/zoho/crm/api/email_drafts/import_email_drafts.ts";
import * as EmailRelatedRecords from "./core/com/zoho/crm/api/email_related_records/import_email_related_records.ts";
import * as EmailSharingDetails from "./core/com/zoho/crm/api/email_sharing_details/import_email_sharing_details.ts";
import * as EmailSignatures from "./core/com/zoho/crm/api/email_signatures/import_email_signatures.ts";
import * as EmailTemplates from "./core/com/zoho/crm/api/email_templates/import_email_templates.ts";
import * as EntityScores from "./core/com/zoho/crm/api/entity_scores/import_entity_scores.ts";
import * as Features from "./core/com/zoho/crm/api/features/import_features.ts";
import * as FieldAttachments from "./core/com/zoho/crm/api/field_attachments/import_field_attachments.ts";
import * as FieldMapDependency from "./core/com/zoho/crm/api/field_map_dependency/import_field_map_dependency.ts";
import * as Fields from "./core/com/zoho/crm/api/fields/import_fields.ts";
import * as Files from "./core/com/zoho/crm/api/files/import_files.ts";
import * as FindAndMerge from "./core/com/zoho/crm/api/find_and_merge/import_find_and_merge.ts";
import * as FiscalYear from "./core/com/zoho/crm/api/fiscal_year/import_fiscal_year.ts";
import * as FromAddresses from "./core/com/zoho/crm/api/from_addresses/import_from_addresses.ts";
import * as Functions from "./core/com/zoho/crm/api/functions/import_functions.ts";
import * as GetRelatedRecordsCount from "./core/com/zoho/crm/api/get_related_records_count/import_get_related_records_count.ts";
import * as GlobalPicklists from "./core/com/zoho/crm/api/global_picklists/import_global_picklists.ts";
import * as HipaaCompliance from "./core/com/zoho/crm/api/hipaa_compliance/import_hipaa_compliance.ts";
import * as Holidays from "./core/com/zoho/crm/api/holidays/import_holidays.ts";
import * as InventoryConvert from "./core/com/zoho/crm/api/inventory_convert/import_inventory_convert.ts";
import * as InventoryMassConvert from "./core/com/zoho/crm/api/inventory_mass_convert/import_inventory_mass_convert.ts";
import * as InventoryTemplates from "./core/com/zoho/crm/api/inventory_templates/import_inventory_templates.ts";
import * as IscSignature from "./core/com/zoho/crm/api/isc_signature/import_isc_signature.ts";
import * as Layouts from "./core/com/zoho/crm/api/layouts/import_layouts.ts";
import * as MailMerge from "./core/com/zoho/crm/api/mail_merge/import_mail_merge.ts";
import * as MassChangeOwner from "./core/com/zoho/crm/api/mass_change_owner/import_mass_change_owner.ts";
import * as MassConvert from "./core/com/zoho/crm/api/mass_convert/import_mass_convert.ts";
import * as MassDeleteCvid from "./core/com/zoho/crm/api/mass_delete_cvid/import_mass_delete_cvid.ts";
import * as MassDeleteTags from "./core/com/zoho/crm/api/mass_delete_tags/import_mass_delete_tags.ts";
import * as Modules from "./core/com/zoho/crm/api/modules/import_modules.ts";
import * as Notes from "./core/com/zoho/crm/api/notes/import_notes.ts";
import * as Notifications from "./core/com/zoho/crm/api/notifications/import_notifications.ts";
import * as Org from "./core/com/zoho/crm/api/org/import_org.ts";
import * as PickListValues from "./core/com/zoho/crm/api/pick_list_values/import_pick_list_values.ts";
import * as Pipeline from "./core/com/zoho/crm/api/pipeline/import_pipeline.ts";
import * as PortalInvite from "./core/com/zoho/crm/api/portal_invite/import_portal_invite.ts";
import * as PortalUserType from "./core/com/zoho/crm/api/portal_user_type/import_portal_user_type.ts";
import * as Portals from "./core/com/zoho/crm/api/portals/import_portals.ts";
import * as PortalsMeta from "./core/com/zoho/crm/api/portals_meta/import_portals_meta.ts";
import * as PrivacyConfigurableApps from "./core/com/zoho/crm/api/privacy_configurable_apps/import_privacy_configurable_apps.ts";
import * as PrivacyPreference from "./core/com/zoho/crm/api/privacy_preference/import_privacy_preference.ts";
import * as Profiles from "./core/com/zoho/crm/api/profiles/import_profiles.ts";
import * as Record from "./core/com/zoho/crm/api/record/import_record.ts";
import * as RecordLocking from "./core/com/zoho/crm/api/record_locking/import_record_locking.ts";
import * as RecordLockingConfiguration from "./core/com/zoho/crm/api/record_locking_configuration/import_record_locking_configuration.ts";
import * as RecordShareEmail from "./core/com/zoho/crm/api/record_share_email/import_record_share_email.ts";
import * as RecycleBin from "./core/com/zoho/crm/api/recycle_bin/import_recycle_bin.ts";
import * as RelatedLists from "./core/com/zoho/crm/api/related_lists/import_related_lists.ts";
import * as RelatedRecords from "./core/com/zoho/crm/api/related_records/import_related_records.ts";
import * as RescheduleHistory from "./core/com/zoho/crm/api/reschedule_history/import_reschedule_history.ts";
import * as Roles from "./core/com/zoho/crm/api/roles/import_roles.ts";
import * as ScoringRules from "./core/com/zoho/crm/api/scoring_rules/import_scoring_rules.ts";
import * as SendMail from "./core/com/zoho/crm/api/send_mail/import_send_mail.ts";
import * as ServicePreference from "./core/com/zoho/crm/api/service_preference/import_service_preference.ts";
import * as ShareRecords from "./core/com/zoho/crm/api/share_records/import_share_records.ts";
import * as SharingRules from "./core/com/zoho/crm/api/sharing_rules/import_sharing_rules.ts";
import * as ShiftHours from "./core/com/zoho/crm/api/shift_hours/import_shift_hours.ts";
import * as Signals from "./core/com/zoho/crm/api/signals/import_signals.ts";
import * as SignalsNotifications from "./core/com/zoho/crm/api/signals_notifications/import_signals_notifications.ts";
import * as Tags from "./core/com/zoho/crm/api/tags/import_tags.ts";
import * as Taxes from "./core/com/zoho/crm/api/taxes/import_taxes.ts";
import * as Templates from "./core/com/zoho/crm/api/templates/import_templates.ts";
import * as Territories from "./core/com/zoho/crm/api/territories/import_territories.ts";
import * as TerritoryUsers from "./core/com/zoho/crm/api/territory_users/import_territory_users.ts";
import * as Timelines from "./core/com/zoho/crm/api/timelines/import_timelines.ts";
import * as UnblockEmail from "./core/com/zoho/crm/api/unblock_email/import_unblock_email.ts";
import * as UnsubscribeLinks from "./core/com/zoho/crm/api/unsubscribe_links/import_unsubscribe_links.ts";
import * as UserGroups from "./core/com/zoho/crm/api/user_groups/import_user_groups.ts";
import * as UserTypeUsers from "./core/com/zoho/crm/api/user_type_users/import_user_type_users.ts";
import * as Users from "./core/com/zoho/crm/api/users/import_users.ts";
import * as UsersTerritories from "./core/com/zoho/crm/api/users_territories/import_users_territories.ts";
import * as UsersTransferDelete from "./core/com/zoho/crm/api/users_transfer_delete/import_users_transfer_delete.ts";
import * as UsersUnavailability from "./core/com/zoho/crm/api/users_unavailability/import_users_unavailability.ts";
import * as VariableGroups from "./core/com/zoho/crm/api/variable_groups/import_variable_groups.ts";
import * as Variables from "./core/com/zoho/crm/api/variables/import_variables.ts";
import * as Webforms from "./core/com/zoho/crm/api/webforms/import_webforms.ts";
import * as Wizards from "./core/com/zoho/crm/api/wizards/import_wizards.ts";
import * as ZiaAllowedFieldMappings from "./core/com/zoho/crm/api/zia_allowed_field_mappings/import_zia_allowed_field_mappings.ts";
import * as ZiaEnrichment from "./core/com/zoho/crm/api/zia_enrichment/import_zia_enrichment.ts";
import * as ZiaOrgEnrichment from "./core/com/zoho/crm/api/zia_org_enrichment/import_zia_org_enrichment.ts";
import * as ZiaPeopleEnrichment from "./core/com/zoho/crm/api/zia_people_enrichment/import_zia_people_enrichment.ts";

// exception
import { SDKException } from "./core/com/zoho/crm/api/exception/sdk_exception.ts";

// token store
import { FileStore } from "./models/authenticator/store/file_store.ts";
import * as TokenStore from "./models/authenticator/store/token_store.ts";

// authenticator
import { OAuthBuilder } from "./models/authenticator/oauth_builder.ts";
import { OAuthToken } from "./models/authenticator/oauth_token.ts";
import * as Token from "./models/authenticator/token.ts";

// controllers
import { APIHTTPConnector } from "./routes/controllers/api_http_connector.ts";
import { APIResponse } from "./routes/controllers/api_response.ts";

//dc
import { AUDataCenter } from "./routes/dc/au_data_center.ts";
import { CADataCenter } from "./routes/dc/ca_data_center.ts";
import { CNDataCenter } from "./routes/dc/cn_data_center.ts";
import { DataCenter } from "./routes/dc/data_center.ts";
import { Environment } from "./routes/dc/environment.ts";
import { EUDataCenter } from "./routes/dc/eu_data_center.ts";
import { INDataCenter } from "./routes/dc/in_data_center.ts";
import { JPDataCenter } from "./routes/dc/jp_data_center.ts";
import { USDataCenter } from "./routes/dc/us_data_center.ts";

// logger
import { LogBuilder } from "./routes/logger/log_builder.ts";
import { Levels, Logger } from "./routes/logger/logger.ts";
import { SDKLogger } from "./routes/logger/sdk_logger.ts";

// middlewares
import { CommonAPIHandler } from "./routes/middlewares/common_api_handler.ts";

// root files
import { Header } from "./routes/header.ts";
import { HeaderMap } from "./routes/header_map.ts";
import { InitializeBuilder } from "./routes/initialize_builder.ts";
import { Initializer } from "./routes/initializer.ts";
import { Param } from "./routes/param.ts";
import { ParameterMap } from "./routes/parameter_map.ts";
import { ProxyBuilder } from "./routes/proxy_builder.ts";
import { RequestProxy } from "./routes/request_proxy.ts";
import { SDKConfig } from "./routes/sdk_config.ts";
import { SDKConfigBuilder } from "./routes/sdk_config_builder.ts";
import { UserSignature } from "./routes/user_signature.ts";

//util files
import { Choice } from "./utils/util/choice.ts";
import { Constants } from "./utils/util/constants.ts";
import { Converter } from "./utils/util/converter.ts";
import { DatatypeConverter } from "./utils/util/datatype_converter.ts";
import { Downloader } from "./utils/util/downloader.ts";
import { FormDataConverter } from "./utils/util/form_data_converter.ts";
import { HeaderParamValidator } from "./utils/util/header_param_validator.ts";
import { JSONConverter } from "./utils/util/json_converter.ts";
import { StreamWrapper } from "./utils/util/stream_wrapper.ts";
import { Utility } from "./utils/util/utility.ts";
import { XMLConverter } from "./utils/util/xml_converter.ts";
class zohocrmsdk {
  Coql;
  UserTypeUsers;
  AssociateEmail;
  EmailSignatures;
  UnblockEmail;
  Layouts;
  VariableGroups;
  Webforms;
  Pipeline;
  FieldMapDependency;
  InventoryConvert;
  AppointmentPreference;
  Fields;
  PrivacyPreference;
  Taxes;
  Attachments;
  PickListValues;
  GlobalPicklists;
  FindAndMerge;
  ContactRoles;
  EntityScores;
  Portals;
  ZiaPeopleEnrichment;
  AvailableCurrencies;
  MailMerge;
  FiscalYear;
  Apis;
  Functions;
  MassChangeOwner;
  DuplicateCheckPreference;
  SignalsNotifications;
  PrivacyConfigurableApps;
  MassConvert;
  CallPreferences;
  Territories;
  SharingRules;
  CancelMeetings;
  EmailConfigurationOptions;
  PortalsMeta;
  EmailSharingDetails;
  ShareRecords;
  InventoryTemplates;
  FromAddresses;
  Holidays;
  Wizards;
  Currencies;
  ZiaAllowedFieldMappings;
  Signals;
  EmailCompose;
  Notes;
  InventoryMassConvert;
  RelatedLists;
  RescheduleHistory;
  PortalUserType;
  DataSharing;
  HipaaCompliance;
  UsersTransferDelete;
  UnsubscribeLinks;
  GetRelatedRecordsCount;
  ServicePreference;
  RecordShareEmail;
  BulkRead;
  ShiftHours;
  UsersTerritories;
  UsersUnavailability;
  Blueprint;
  Roles;
  EmailRelatedRecords;
  MassDeleteTags;
  Modules;
  PortalInvite;
  Cadences;
  ZiaEnrichment;
  Timelines;
  UserGroups;
  ConversionOption;
  ScoringRules;
  RecycleBin;
  Digest;
  Org;
  RecordLockingConfiguration;
  Users;
  CustomViews;
  Tags;
  EmailTemplates;
  Files;
  EmailComposeMeta;
  Templates;
  Definition;
  EmailDrafts;
  TerritoryUsers;
  BusinessHours;
  AuditLogExport;
  Features;
  Profiles;
  SendMail;
  MassDeleteCvid;
  DealContactRoles;
  CadencesExecution;
  ConvertLead;
  IscSignature;
  Backup;
  FieldAttachments;
  ZiaOrgEnrichment;
  Variables;
  ChangeOwner;
  RecordLocking;
  RelatedRecords;
  DownloadInlineImages;
  AssignmentRules;
  Notifications;
  BulkWrite;
  DownloadAttachments;
  Record;

  SDKException;

  DBBuilder;
  DBStore;
  FileStore;
  TokenStore;

  OAuthBuilder;
  OAuthToken;
  Token;

  APIHTTPConnector;
  APIResponse;

  AUDataCenter;
  CNDataCenter;
  DataCenter;
  Environment;
  EUDataCenter;
  INDataCenter;
  USDataCenter;
  JPDataCenter;
  CADataCenter;

  LogBuilder;
  Logger;
  Levels;
  SDKLogger;

  CommonAPIHandler;

  HeaderMap;
  Header;
  InitializeBuilder;
  Initializer;
  Param;
  ParameterMap;
  ProxyBuilder;
  RequestProxy;
  SDKConfigBuilder;
  SDKConfig;
  UserSignature;

  Choice;
  Constants;
  Converter;
  DatatypeConverter;
  Downloader;
  FormDataConverter;
  HeaderParamValidator;
  JSONConverter;
  ModuleFieldsHandler;
  StreamWrapper;
  Utility;
  XMLConverter;

  constructor() {
    this.Coql = Coql;
    this.UserTypeUsers = UserTypeUsers;
    this.AssociateEmail = AssociateEmail;
    this.EmailSignatures = EmailSignatures;
    this.UnblockEmail = UnblockEmail;
    this.Layouts = Layouts;
    this.VariableGroups = VariableGroups;
    this.Webforms = Webforms;
    this.Pipeline = Pipeline;
    this.FieldMapDependency = FieldMapDependency;
    this.InventoryConvert = InventoryConvert;
    this.AppointmentPreference = AppointmentPreference;
    this.Fields = Fields;
    this.PrivacyPreference = PrivacyPreference;
    this.Taxes = Taxes;
    this.Attachments = Attachments;
    this.PickListValues = PickListValues;
    this.GlobalPicklists = GlobalPicklists;
    this.FindAndMerge = FindAndMerge;
    this.ContactRoles = ContactRoles;
    this.EntityScores = EntityScores;
    this.Portals = Portals;
    this.ZiaPeopleEnrichment = ZiaPeopleEnrichment;
    this.AvailableCurrencies = AvailableCurrencies;
    this.MailMerge = MailMerge;
    this.FiscalYear = FiscalYear;
    this.Apis = Apis;
    this.Functions = Functions;
    this.MassChangeOwner = MassChangeOwner;
    this.DuplicateCheckPreference = DuplicateCheckPreference;
    this.SignalsNotifications = SignalsNotifications;
    this.PrivacyConfigurableApps = PrivacyConfigurableApps;
    this.MassConvert = MassConvert;
    this.CallPreferences = CallPreferences;
    this.Territories = Territories;
    this.SharingRules = SharingRules;
    this.CancelMeetings = CancelMeetings;
    this.EmailConfigurationOptions = EmailConfigurationOptions;
    this.PortalsMeta = PortalsMeta;
    this.EmailSharingDetails = EmailSharingDetails;
    this.ShareRecords = ShareRecords;
    this.InventoryTemplates = InventoryTemplates;
    this.FromAddresses = FromAddresses;
    this.Holidays = Holidays;
    this.Wizards = Wizards;
    this.Currencies = Currencies;
    this.ZiaAllowedFieldMappings = ZiaAllowedFieldMappings;
    this.Signals = Signals;
    this.EmailCompose = EmailCompose;
    this.Notes = Notes;
    this.InventoryMassConvert = InventoryMassConvert;
    this.RelatedLists = RelatedLists;
    this.RescheduleHistory = RescheduleHistory;
    this.PortalUserType = PortalUserType;
    this.DataSharing = DataSharing;
    this.HipaaCompliance = HipaaCompliance;
    this.UsersTransferDelete = UsersTransferDelete;
    this.UnsubscribeLinks = UnsubscribeLinks;
    this.GetRelatedRecordsCount = GetRelatedRecordsCount;
    this.ServicePreference = ServicePreference;
    this.RecordShareEmail = RecordShareEmail;
    this.BulkRead = BulkRead;
    this.ShiftHours = ShiftHours;
    this.UsersTerritories = UsersTerritories;
    this.UsersUnavailability = UsersUnavailability;
    this.Blueprint = Blueprint;
    this.Roles = Roles;
    this.EmailRelatedRecords = EmailRelatedRecords;
    this.MassDeleteTags = MassDeleteTags;
    this.Modules = Modules;
    this.PortalInvite = PortalInvite;
    this.Cadences = Cadences;
    this.ZiaEnrichment = ZiaEnrichment;
    this.Timelines = Timelines;
    this.UserGroups = UserGroups;
    this.ConversionOption = ConversionOption;
    this.ScoringRules = ScoringRules;
    this.RecycleBin = RecycleBin;
    this.Digest = Digest;
    this.Org = Org;
    this.RecordLockingConfiguration = RecordLockingConfiguration;
    this.Users = Users;
    this.CustomViews = CustomViews;
    this.Tags = Tags;
    this.EmailTemplates = EmailTemplates;
    this.Files = Files;
    this.EmailComposeMeta = EmailComposeMeta;
    this.Templates = Templates;
    this.Definition = Definition;
    this.EmailDrafts = EmailDrafts;
    this.TerritoryUsers = TerritoryUsers;
    this.BusinessHours = BusinessHours;
    this.AuditLogExport = AuditLogExport;
    this.Features = Features;
    this.Profiles = Profiles;
    this.SendMail = SendMail;
    this.MassDeleteCvid = MassDeleteCvid;
    this.DealContactRoles = DealContactRoles;
    this.CadencesExecution = CadencesExecution;
    this.ConvertLead = ConvertLead;
    this.IscSignature = IscSignature;
    this.Backup = Backup;
    this.FieldAttachments = FieldAttachments;
    this.ZiaOrgEnrichment = ZiaOrgEnrichment;
    this.Variables = Variables;
    this.ChangeOwner = ChangeOwner;
    this.RecordLocking = RecordLocking;
    this.RelatedRecords = RelatedRecords;
    this.DownloadInlineImages = DownloadInlineImages;
    this.AssignmentRules = AssignmentRules;
    this.Notifications = Notifications;
    this.BulkWrite = BulkWrite;
    this.DownloadAttachments = DownloadAttachments;
    this.Record = Record;

    this.SDKException = SDKException;

    this.FileStore = FileStore;
    this.TokenStore = TokenStore;

    this.OAuthBuilder = OAuthBuilder;
    this.OAuthToken = OAuthToken;
    this.Token = Token;

    this.APIHTTPConnector = APIHTTPConnector;
    this.APIResponse = APIResponse;

    this.AUDataCenter = AUDataCenter;
    this.CNDataCenter = CNDataCenter;
    this.DataCenter = DataCenter;
    this.Environment = Environment;
    this.EUDataCenter = EUDataCenter;
    this.INDataCenter = INDataCenter;
    this.USDataCenter = USDataCenter;
    this.JPDataCenter = JPDataCenter;
    this.CADataCenter = CADataCenter;

    this.LogBuilder = LogBuilder;
    this.Logger = Logger;
    this.Levels = Levels;
    this.SDKLogger = SDKLogger;

    this.CommonAPIHandler = CommonAPIHandler;

    this.HeaderMap = HeaderMap;
    this.Header = Header;
    this.InitializeBuilder = InitializeBuilder;
    this.Initializer = Initializer;
    this.Param = Param;
    this.ParameterMap = ParameterMap;
    this.ProxyBuilder = ProxyBuilder;
    this.RequestProxy = RequestProxy;
    this.SDKConfigBuilder = SDKConfigBuilder;
    this.SDKConfig = SDKConfig;
    this.UserSignature = UserSignature;

    this.Choice = Choice;
    this.Constants = Constants;
    this.Converter = Converter;
    this.DatatypeConverter = DatatypeConverter;
    this.Downloader = Downloader;
    this.FormDataConverter = FormDataConverter;
    this.HeaderParamValidator = HeaderParamValidator;
    this.JSONConverter = JSONConverter;
    this.StreamWrapper = StreamWrapper;
    this.Utility = Utility;
    this.XMLConverter = XMLConverter;
  }
}
//
export default zohocrmsdk;
//
export {
  APIHTTPConnector,
  APIResponse,
  Apis,
  AppointmentPreference,
  AssignmentRules,
  AssociateEmail,
  Attachments,
  AUDataCenter,
  AuditLogExport,
  AvailableCurrencies,
  Backup,
  Blueprint,
  BulkRead,
  BulkWrite,
  BusinessHours,
  CADataCenter,
  Cadences,
  CadencesExecution,
  CallPreferences,
  CancelMeetings,
  ChangeOwner,
  Choice,
  CNDataCenter,
  CommonAPIHandler,
  Constants,
  ContactRoles,
  ConversionOption,
  Converter,
  ConvertLead,
  Coql,
  Currencies,
  CustomViews,
  DataCenter,
  DataSharing,
  DatatypeConverter,
  DealContactRoles,
  Definition,
  Digest,
  DownloadAttachments,
  Downloader,
  DownloadInlineImages,
  DuplicateCheckPreference,
  EmailCompose,
  EmailComposeMeta,
  EmailConfigurationOptions,
  EmailDrafts,
  EmailRelatedRecords,
  EmailSharingDetails,
  EmailSignatures,
  EmailTemplates,
  EntityScores,
  Environment,
  EUDataCenter,
  Features,
  FieldAttachments,
  FieldMapDependency,
  Fields,
  Files,
  FileStore,
  FindAndMerge,
  FiscalYear,
  FormDataConverter,
  FromAddresses,
  Functions,
  GetRelatedRecordsCount,
  GlobalPicklists,
  Header,
  HeaderMap,
  HeaderParamValidator,
  HipaaCompliance,
  Holidays,
  INDataCenter,
  InitializeBuilder,
  Initializer,
  InventoryConvert,
  InventoryMassConvert,
  InventoryTemplates,
  IscSignature,
  JPDataCenter,
  JSONConverter,
  Layouts,
  Levels,
  LogBuilder,
  Logger,
  MailMerge,
  MassChangeOwner,
  MassConvert,
  MassDeleteCvid,
  MassDeleteTags,
  Modules,
  Notes,
  Notifications,
  OAuthBuilder,
  OAuthToken,
  Org,
  Param,
  ParameterMap,
  PickListValues,
  Pipeline,
  PortalInvite,
  Portals,
  PortalsMeta,
  PortalUserType,
  PrivacyConfigurableApps,
  PrivacyPreference,
  Profiles,
  ProxyBuilder,
  Record,
  RecordLocking,
  RecordLockingConfiguration,
  RecordShareEmail,
  RecycleBin,
  RelatedLists,
  RelatedRecords,
  RequestProxy,
  RescheduleHistory,
  Roles,
  ScoringRules,
  SDKConfig,
  SDKConfigBuilder,
  SDKException,
  SDKLogger,
  SendMail,
  ServicePreference,
  ShareRecords,
  SharingRules,
  ShiftHours,
  Signals,
  SignalsNotifications,
  StreamWrapper,
  Tags,
  Taxes,
  Templates,
  Territories,
  TerritoryUsers,
  Timelines,
  Token,
  TokenStore,
  UnblockEmail,
  UnsubscribeLinks,
  USDataCenter,
  UserGroups,
  Users,
  UserSignature,
  UsersTerritories,
  UsersTransferDelete,
  UsersUnavailability,
  UserTypeUsers,
  Utility,
  VariableGroups,
  Variables,
  Webforms,
  Wizards,
  XMLConverter,
  ZiaAllowedFieldMappings,
  ZiaEnrichment,
  ZiaOrgEnrichment,
  ZiaPeopleEnrichment,
};
