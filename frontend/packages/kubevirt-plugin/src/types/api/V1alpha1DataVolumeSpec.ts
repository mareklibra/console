// tslint:disable
/**
 * KubeVirt API
 * This is KubeVirt API an add-on for Kubernetes.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: kubevirt-dev@googlegroups.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { V1alpha1DataVolumeSource } from './V1alpha1DataVolumeSource';
import { V1PersistentVolumeClaimSpec } from './V1PersistentVolumeClaimSpec';

/**
 * DataVolumeSpec defines our specification for a DataVolume type
 * @export
 * @interface V1alpha1DataVolumeSpec
 */
export interface V1alpha1DataVolumeSpec {
  /**
   * DataVolumeContentType options: \"kubevirt\", \"archive\"
   * @type {string}
   * @memberof V1alpha1DataVolumeSpec
   */
  contentType?: string;
  /**
   *
   * @type {V1PersistentVolumeClaimSpec}
   * @memberof V1alpha1DataVolumeSpec
   */
  pvc: V1PersistentVolumeClaimSpec;
  /**
   *
   * @type {V1alpha1DataVolumeSource}
   * @memberof V1alpha1DataVolumeSpec
   */
  source: V1alpha1DataVolumeSource;
}
